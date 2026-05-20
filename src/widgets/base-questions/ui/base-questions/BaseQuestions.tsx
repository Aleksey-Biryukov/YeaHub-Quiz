import styles from "./BaseQuestions.module.css";
import { useGetBaseQuestionsQuery } from "@/entities/base-questions";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app";
import { setSession } from "@/entities/base-questions";
import { Sidebar, Pagination, NotFoundButton } from "@/features/base-questions";
import QuestionItem from "../question-item/QuestionItem";
import { useGetFiltersParams } from "../../lib/useGetFiltersParams";
import Filter_button from "./icons/Filter_button.svg";
import ModalSidebar from "@/features/base-questions/ui/modal-sidebar/ui/ModalSidebar";
// import Close_button from "./icons/Close_button.svg";

function BaseQuestions() {
  const dispatch = useAppDispatch();
  const [questionsTitle, setQuestionsTitle] = useState("");
  const [questionIsOpenID, setQuestionIsOpenID] = useState<number | null>(null);
  const [isOpenModalSidebar, setIsOpenModalSidebar] = useState(false);
  const sessionQuestions = useAppSelector(
    (store) => store.questionsSessionSlice.questions,
  );
  const filtersParams = useGetFiltersParams();
  const { data: questions, isLoading } =
    useGetBaseQuestionsQuery(filtersParams);

  useEffect(() => {
    if (!questions) return;
    dispatch(
      setSession({
        questions: questions.data,
        filters: filtersParams,
        totalQuestions: questions.total,
      }),
    );
  }, [questions, filtersParams, dispatch]);

  const pages = questions?.total ?? 0;
  const totalPages = Math.ceil(pages / 10);

  if (isLoading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  return (
    <>
      <div className={styles.questions_container}>
        <div className={styles.list_container}>
          <div className={styles.questions_selected_title}>
            <h1 className={styles.selected_title}>
              {questionsTitle ? `Вопросы ${questionsTitle}` : "Вопросы"}
            </h1>
            <button
              className={styles.filter_sidebar_btn}
              onClick={() => {
                setIsOpenModalSidebar((prev) => !prev);
              }}
            >
              <img src={Filter_button} alt="Filter_button" />
            </button>
            {isOpenModalSidebar ? (
              <ModalSidebar
                setIsOpenModalSidebar={setIsOpenModalSidebar}
                setQuestionsTitle={setQuestionsTitle}
              />
            ) : null}
          </div>
          {sessionQuestions.length === 0 ? (
            <NotFoundButton setQuestionsTitle={setQuestionsTitle} />
          ) : (
            <>
              <ul className={styles.questions_list}>
                {sessionQuestions.map((question, index) => {
                  return (
                    <li key={question.id}>
                      <QuestionItem
                        question={question}
                        index={index}
                        questionIsOpenID={questionIsOpenID}
                        setQuestionIsOpenID={setQuestionIsOpenID}
                      />
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
        <div className={styles.pagination_wrapper}>
          <Pagination totalPages={totalPages} />
        </div>
      </div>
      <div className={styles.sidebar_container}>
        <Sidebar setQuestionsTitle={setQuestionsTitle} />
      </div>
    </>
  );
}

export default BaseQuestions;
