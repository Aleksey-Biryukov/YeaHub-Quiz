import styles from "./LongAnswer.module.css";
import ArrowLeft from "./icons/arrowLeft.svg";
import { useAppSelector } from "@/app";
import { useNavigate } from "react-router";
import { SwitchQuestions } from "@/features/base-questions";
import LongAnswerTitle from "./components/long-answer-title/LongAnswerTitle";
import SelectedOptions from "./components/selected-options/SelectedOptions";
import { useBaseQuestionsNavigate } from "./lib/useBaseQuestionsNavigate";
import { createQueryString } from "./lib/createQueryString";
import Filter_button from "./icons/Filter_button.svg";
import { useState } from "react";
import { ModalProperty } from "@/features/base-questions";
function LongAnswer() {
  const [isOpenPropertyModal, setIsOpenPropertyModal] = useState(false);
  const { next, prev } = useBaseQuestionsNavigate();
  const questions = useAppSelector(
    (store) => store.questionsSessionSlice.questions,
  );
  const currentIndex = useAppSelector(
    (store) => store.questionsSessionSlice.currentIndex,
  );
  const actualParamsForBack = useAppSelector(
    (store) => store.questionsSessionSlice.filters,
  );
  const question = questions[currentIndex];
  const navigate = useNavigate();

  if (!question) {
    return null;
  }

  return (
    <>
      <div className={styles.back_wrapper}>
        <button
          className={styles.button_back_wrapper}
          onClick={() => {
            navigate(`/questions?${createQueryString(actualParamsForBack)}`);
          }}
        >
          <img src={ArrowLeft} alt="Стрелка влево" />
          <p className={styles.button_back_text}>Назад</p>
        </button>
        <button
          className={styles.button_property}
          onClick={() => setIsOpenPropertyModal((prev) => !prev)}
        >
          <img src={Filter_button} alt="Filter_button" />
        </button>
      </div>
      {isOpenPropertyModal ? <ModalProperty question={question} /> : null}
      <div className={styles.content_wrapper}>
        <div className={styles.longAnswer_content}>
          <LongAnswerTitle question={question} />

          <SwitchQuestions prev={prev} next={next} />

          <div className={styles.shortAnswer_wrap}>
            <h2 className={styles.shortAnswer_heading}>Краткий ответ</h2>
            <p className={styles.shortAnswer_text}>
              {questions[currentIndex].shortAnswer}
            </p>
          </div>
          <div className={styles.longAnswer_wrap}>
            <h2 className={styles.longAnswer_heading}>Развёрнутый ответ</h2>
            <p className={styles.longAnswer_text}>
              {questions[currentIndex].longAnswer}
            </p>
          </div>
        </div>
        <div className={styles.selected_options_wrap}>
          <SelectedOptions question={question} />
        </div>
      </div>
    </>
  );
}

export default LongAnswer;
