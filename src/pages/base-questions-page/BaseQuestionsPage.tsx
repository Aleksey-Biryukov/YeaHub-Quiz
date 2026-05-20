import styles from "./BaseQuestionsPage.module.css";
import { BaseQuestions } from "@/widgets/base-questions";
function BaseQuestionsPage() {
  return (
    <div className={styles.questions_wrapper}>
      <BaseQuestions />
    </div>
  );
}

export default BaseQuestionsPage;
