import styles from "./QuizSettingsPage.module.css";
import { QuizSettings } from "@/widgets/quiz-questions";
function QuizSettingsPage() {
  return (
    <div className={styles.interview_wrapper}>
      <QuizSettings />
    </div>
  );
}
export default QuizSettingsPage;
