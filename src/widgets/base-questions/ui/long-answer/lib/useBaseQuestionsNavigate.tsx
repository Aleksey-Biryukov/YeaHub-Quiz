import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "@/app";
import { useLazyGetBaseQuestionsQuery } from "@/entities/base-questions";
import {
  setCurrentIndex,
  setCurrentPage,
  setSession,
} from "@/entities/base-questions";

export function useBaseQuestionsNavigate() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [fetchQuestions] = useLazyGetBaseQuestionsQuery();

  const session = useAppSelector((store) => store.questionsSessionSlice);

  const { questions, currentIndex, currentPage, filters } = session;

  useEffect(() => {
    const saved = localStorage.getItem("questionsSession");
    if (!saved) return; /* если saved true return  */
    const parsed = JSON.parse(saved);
    dispatch(
      setSession({
        questions: parsed.questions,
        totalQuestions: parsed.totalQuestions,
        filters: parsed.filters,
      }),
    );
    dispatch(setCurrentPage(parsed.currentPage));
    dispatch(setCurrentIndex(parsed.currentIndex));
  }, [dispatch]);

  useEffect(() => {
    if (!questions.length) return; /*если questions false return  */

    localStorage.setItem(
      "questionsSession",
      JSON.stringify({
        questions,
        totalQuestions: session.totalQuestions,
        currentPage,
        currentIndex,
        filters,
      }),
    );
  }, [questions, currentPage, currentIndex, session.totalQuestions, filters]);

  const next = async () => {
    const globalIndex =
      (currentPage - 1) * (filters.limit ?? 10) + currentIndex + 1;

    const nextGlobalQuestion = globalIndex + 1;

    if (nextGlobalQuestion > session.totalQuestions) {
      return;
    }
    const nextPage =
      Math.floor((nextGlobalQuestion - 1) / (filters.limit ?? 10)) + 1;

    const nextLocalIndex = (nextGlobalQuestion - 1) % (filters.limit ?? 10);

    if (nextPage === currentPage) {
      dispatch(setCurrentIndex(currentIndex + 1));
      navigate(`/questions/${nextGlobalQuestion}`);
      return;
    }

    const res = await fetchQuestions({
      ...filters,
      page: nextPage,
      limit: filters.limit,
    }).unwrap();

    dispatch(
      setSession({
        questions: res.data,
        totalQuestions: res.total,
        filters,
      }),
    );

    dispatch(setCurrentPage(nextPage));

    dispatch(setCurrentIndex(nextLocalIndex));

    navigate(`/questions/${nextGlobalQuestion}`);
  };

  const prev = async () => {
    const globalIndex =
      (currentPage - 1) * (filters.limit ?? 10) + currentIndex + 1;

    const prevGlobalQuestion = globalIndex - 1;

    if (prevGlobalQuestion < 1) return;

    const prevPage =
      Math.floor((prevGlobalQuestion - 1) / (filters.limit ?? 10)) + 1;

    const prevLocalIndex = (prevGlobalQuestion - 1) % (filters.limit ?? 10);

    if (prevPage === currentPage) {
      dispatch(setCurrentIndex(currentIndex - 1));

      navigate(`/questions/${prevGlobalQuestion}`);
      return;
    }

    const res = await fetchQuestions({
      ...filters,
      page: prevPage,
      limit: filters.limit,
    }).unwrap();

    dispatch(
      setSession({
        questions: res.data,
        totalQuestions: res.total,
        filters,
      }),
    );

    dispatch(setCurrentPage(prevPage));

    dispatch(setCurrentIndex(prevLocalIndex));

    navigate(`/questions/${prevGlobalQuestion}`);
  };

  return {
    next,
    prev,
  };
}
