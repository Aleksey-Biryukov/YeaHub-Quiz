import DOMPurify from "dompurify";
import Dot from "./icons/dot.svg?react";
import styles from "./QuizAnswer.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/app";
import { quizQuestionsApi } from "@/entities/quiz-questions";
import type { QuizAnswerProps } from "../../../../model/types";
import QuestionComplitedButtons from "../question-complited-buttons/QuestionComplitedButtons";

function QuizAnswer({ isOpenAnswer, onToggleAnswer }: QuizAnswerProps) {
  const params = useParams();
  const currentQuestion = parseInt(params.questionId ?? "1");
  const [storedQuestions, setStoredQuestions] = useState([]);
  const limit = useAppSelector((state) => state.quizQuestionLimitSlice.count);

  const specializationId = useAppSelector(
    (store) => store.specialization.selectedId,
  );

  useEffect(() => {
    const saved = localStorage.getItem("quizQuestions");

    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStoredQuestions(JSON.parse(saved));
    }
  }, []);

  const { data, isLoading } = quizQuestionsApi.useGetQuestionsQuery(
    {
      limit,
      specializationId,
    },
    {
      skip: storedQuestions.length > 0,
    },
  );

  useEffect(() => {
    if (data?.questions?.length) {
      localStorage.setItem("quizQuestions", JSON.stringify(data.questions));

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStoredQuestions(data.questions);
    }
  }, [data]);

  const quizQuestions = data?.questions || storedQuestions;
  if (isLoading && quizQuestions.length === 0) {
    return <div className={styles.loading}>Загрузка вопросов...</div>;
  }

  return (
    <div className={styles.answer_wrapper}>
      <div className={styles.question_title}>
        <Dot />
        <h1 className={styles.title_text}>
          {quizQuestions?.[currentQuestion - 1]?.title}
        </h1>
      </div>
      <div className={styles.answer_content}>
        {isOpenAnswer && (
          <div className={styles.answer_text}>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  quizQuestions?.[currentQuestion - 1]?.shortAnswer,
                ),
              }}
            />
          </div>
        )}
        <button className={styles.show_answer_btn}>
          {isOpenAnswer ? (
            <p className={styles.btn_text} onClick={onToggleAnswer}>
              Скрыть ответ
            </p>
          ) : (
            <p
              className={styles.btn_text}
              onClick={() => {
                onToggleAnswer();
              }}
            >
              Посмотреть ответ
            </p>
          )}
        </button>
        <QuestionComplitedButtons />
      </div>
    </div>
  );
}

export default QuizAnswer;
