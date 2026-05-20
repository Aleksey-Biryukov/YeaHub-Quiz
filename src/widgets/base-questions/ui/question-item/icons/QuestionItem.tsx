import styles from "./QuestionItem.module.css";
import Chevron from "../../assets/icons/chevrone_down.svg";
import Ellipse from "../../assets/icons/ellipse.svg";
// import OpenQuestion from "../OpenQuestion/OpenQuestion";
// import { useOutletContext } from "react-router-dom";

function QuestionItem({ question }) {
  // const { questionIsOpenID, setQuestionIsOpenID } = useOutletContext(null);
  // const isOpen = questionIsOpenID === question.id;

  return (
    <div className={styles.item_container}>
      <div className={styles.item_wrapper}>
        <div
          className={styles.item_title}
          // onClick={() => {
          //   setQuestionIsOpenID((prev) =>
          //     prev === question.id ? null : question.id,
          //   );
          // }}
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
        {/* {isOpen ? (
          <OpenQuestion
            question={question}
            setQuestionIsOpenID={setQuestionIsOpenID}
          />
        ) : null} */}
      </div>
    </div>
  );
}

export default QuestionItem;
