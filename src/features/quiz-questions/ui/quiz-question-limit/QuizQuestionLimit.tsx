import styles from "./QuizQuestionLimit.module.css";
import Minus from "./icons/minus.svg?react";
import Plus from "./icons/plus.svg?react";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { decrement, increment } from "@/entities/quiz-questions";
function QuizQuestionLimit() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.quizQuestionLimitSlice.count);
  return (
    <div className={styles.countQuestions_wrapper}>
      <div className={styles.countQuestions_title}>
        <p className={styles.title_text}>Количество вопросов</p>
      </div>
      <div className={styles.countQuestions_items}>
        <div className={styles.item} onClick={() => dispatch(decrement())}>
          <Minus />
        </div>
        <div className={styles.item_count}>{count}</div>
        <div className={styles.item} onClick={() => dispatch(increment())}>
          <Plus />
        </div>
      </div>
    </div>
  );
}

export default QuizQuestionLimit;
