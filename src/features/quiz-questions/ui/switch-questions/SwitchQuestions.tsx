import styles from "./SwitchQuestions.module.css";
import Alt_ArrowLeft from "./icons/Alt_Arrow_Left.svg";
import Alt_ArrowRight from "./icons/Alt_Arrow_Right.svg";
import { useBaseQuestionsNavigate } from "./lib/useBaseQuestionsNavigate";
function SwitchQuestions() {
  const { next, prev } = useBaseQuestionsNavigate();
  return (
    <div className={styles.switch_question_wrap}>
      <div className={styles.switch_content_container}>
        <button className={styles.switch_button} onClick={prev}>
          <img
            src={Alt_ArrowLeft}
            alt="Стрелка влево"
            className={styles.switch_img}
          />
          <p className={styles.switch_text}>Предыдущий</p>
        </button>
        <button className={styles.switch_button} onClick={next}>
          <p className={styles.switch_text}>Следующий</p>
          <img
            src={Alt_ArrowRight}
            alt="Стрелка вправо"
            className={styles.switch_img}
          />
        </button>
      </div>
    </div>
  );
}

export default SwitchQuestions;
