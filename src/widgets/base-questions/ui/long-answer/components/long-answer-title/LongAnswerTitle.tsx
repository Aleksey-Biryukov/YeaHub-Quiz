import type { LongAnswerTitleProps } from "../../../../model/types";
import styles from "./LongAnswerTitle.module.css";
import AnswerImg from "./icons/icon_title_answer.svg";

function LongAnswerTitle({ question }: LongAnswerTitleProps) {
  return (
    <div className={styles.longAnswer_title_wrap}>
      <div className={styles.title_content}>
        <img src={AnswerImg} alt="Иконка ответа" className={styles.title_img} />

        <div className={styles.longAnswer_title}>
          <h1 className={styles.longAnswer_title_text}>{question.title}</h1>
          <p className={styles.longAnswer_small_text}>{question.description}</p>
        </div>
      </div>
    </div>
  );
}

export default LongAnswerTitle;
