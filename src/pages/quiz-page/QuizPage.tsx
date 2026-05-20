import styles from "./QuizPage.module.css";
import { QuizQuestions, QuizQuestionsProgress } from "@/widgets/quiz-questions";

function QuizPage() {
  return (
    <div className={styles.quiz_wrapper}>
      <QuizQuestionsProgress />
      <QuizQuestions />
    </div>
  );
}

export default QuizPage;
