import styles from "./OpenQuestion.module.css";
import Dots from "./icons/vertical_three_dots.svg";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import type { OpenQuestionProps } from "../../model/types";
import { ModalOpenQuestion } from "@/features/base-questions";

function OpenQuestion({
  question,
  index,
  setQuestionIsOpenID,
}: OpenQuestionProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest("[data-option_button]")) return;

      if (isOpenModal && !target.closest("[data-modal]")) {
        setIsOpenModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpenModal]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.option_wrapper}>
        <div className={styles.complexity_rate_wrap}>
          <div className={styles.rate}>
            Рейтинг: <div className={styles.block_value}>{question.rate}</div>
          </div>
          <div className={styles.complexity}>
            Сложность:
            <div className={styles.block_value}>{question.complexity}</div>
          </div>
        </div>
        <div className={styles.option_button_wrap}>
          <button
            className={styles.option_button}
            data-option_button="true"
            onClick={() => {
              setIsOpenModal((prev) => !prev);
            }}
          >
            <img src={Dots} alt="Три точки" />
          </button>
          {isOpenModal && (
            <ModalOpenQuestion
              setIsOpenModal={setIsOpenModal}
              index={index}
              setQuestionIsOpenID={setQuestionIsOpenID}
            />
          )}
        </div>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(question?.shortAnswer),
        }}
      ></div>
    </div>
  );
}

export default OpenQuestion;
