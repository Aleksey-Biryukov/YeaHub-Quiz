import { useParams } from "react-router";
import styles from "./QuizQuestionsProgress.module.css";
import { useAppSelector } from "@/app";
function QuizQuestionsProgress() {
  const count = useAppSelector((store) => store.quizQuestionLimitSlice.count);
  const params = useParams<{ questionId?: string }>();
  const question = params.questionId ?? "1";
  const currentQuestion = parseInt(question);

  return (
    <div className={styles.progress_wrapper}>
      <div className={styles.progress_bar}>
        <div className={styles.progress_title}>Вопросы собеседования</div>
        <div className={styles.progress_count}>
          {currentQuestion}/{count}
        </div>
      </div>
      <div className={styles.progress_line}>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`${styles.line_segment}
          ${index < currentQuestion ? styles.active : ""}
          `}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default QuizQuestionsProgress;
