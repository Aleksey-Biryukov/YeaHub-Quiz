import styles from "./QuestionComplitedButtons.module.css";
import ThumbsDown from "./icons/ThumbsDown.svg?react";
import ThumbsUp from "./icons/ThumbsUp.svg?react";
function QuestionComplitedButtons() {
  return (
    <div className={styles.complited_buttons_wrapper}>
      <button className={styles.complited_buttons}>
        <ThumbsDown fill="currentColor" className={styles.complited_icon} />{" "}
        <p className={styles.complited_text_down}>Не знаю</p>
      </button>
      <button className={styles.complited_buttons}>
        <ThumbsUp /> <p className={styles.complited_text_up}>Знаю</p>
      </button>
    </div>
  );
}

export default QuestionComplitedButtons;
