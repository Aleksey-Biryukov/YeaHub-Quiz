import { useState } from "react";
import styles from "./QuizQuestions.module.css";
import { ButtonClosedQuiz } from "@/features/quiz-questions";
import QuizAnswer from "./components/quiz-answer/QuizAnswer";
import { QuizQuestionToggle } from "@/features/quiz-questions";
function QuizQuestions() {
  const [isOpenAnswer, setIsOpenAnswer] = useState(false);

  return (
    <div className={styles.quiz_wrapper}>
      <QuizQuestionToggle setIsOpenAnswer={setIsOpenAnswer} />
      <QuizAnswer
        isOpenAnswer={isOpenAnswer}
        onToggleAnswer={() => setIsOpenAnswer((prev) => !prev)}
      />
      <div className={styles.btn_wrapper}>
        <ButtonClosedQuiz />
      </div>
    </div>
  );
}

export default QuizQuestions;
