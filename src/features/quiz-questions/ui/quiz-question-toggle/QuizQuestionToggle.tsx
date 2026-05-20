import styles from "./QuizQuestionToggle.module.css";
import Left from "./icons/chevrone_left.svg?react";
import Right from "./icons/chevrone_right.svg?react";
import { useParams, useNavigate } from "react-router";
import { useAppSelector } from "@/app";
import type { QuizQuestionToggleProps } from "../../model/types";
function QuizQuestionToggle({ setIsOpenAnswer }: QuizQuestionToggleProps) {
  const totalQuestions = useAppSelector(
    (store) => store.quizQuestionLimitSlice.count,
  );
  const params = useParams<{ questionId?: string }>();
  const currentQuestion = parseInt(params.questionId ?? "1");
  const navigate = useNavigate();
  const handlePrevQuestion = () => {
    if (currentQuestion > 1) {
      navigate(`/interview-quiz/${currentQuestion - 1}`);
      setIsOpenAnswer(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions) {
      navigate(`/interview-quiz/${currentQuestion + 1}`);
      setIsOpenAnswer(false);
    }
  };

  return (
    <div className={styles.quiz_nav_wrapper}>
      <div className={styles.nav_link_container} onClick={handlePrevQuestion}>
        <Left /> <p className={styles.nav_text}>Назад</p>
      </div>
      <div className={styles.nav_link_container} onClick={handleNextQuestion}>
        <p className={styles.nav_text}>Вперёд</p> <Right />
      </div>
    </div>
  );
}

export default QuizQuestionToggle;
