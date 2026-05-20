import styles from "./QuestionItem.module.css";
import Chevron from "./icons/chevrone_down.svg";
import Ellipse from "./icons/ellipse.svg";
import OpenQuestion from "../open-question/OpenQuestion";
import type { QuestionItemProps } from "../../model/types";

function QuestionItem({
  question,
  index,
  questionIsOpenID,
  setQuestionIsOpenID,
}: QuestionItemProps) {
  const isOpen = questionIsOpenID === question.id;

  return (
    <div className={styles.item_container}>
      <div className={styles.item_wrapper}>
        <div
          className={styles.item_title}
          onClick={() => {
            setQuestionIsOpenID((prev) => {
              return prev === question.id ? null : question.id;
            });
          }}
        >
          <div className={styles.title_wrapper}>
            <img className={styles.ellipse_icon} src={Ellipse} alt="Ellipse" />
            <p className={styles.content_text}>{question.title}</p>
          </div>
          <img
            className={`
            ${styles.chevron_icon}
            ${isOpen ? styles.open : ""}
            `}
            src={Chevron}
            alt="Chevron"
          />
        </div>
        {isOpen ? (
          <OpenQuestion
            question={question}
            index={index}
            setQuestionIsOpenID={setQuestionIsOpenID}
          />
        ) : null}
      </div>
    </div>
  );
}

export default QuestionItem;
