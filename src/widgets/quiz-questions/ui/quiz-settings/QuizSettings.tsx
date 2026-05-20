import styles from "./QuizSettings.module.css";
import { SpecializationsList } from "@/features/quiz-questions";
import QuestionsCategories from "./components/questions-categories/QuestionsCategories";
import LevelComplexity from "./components/level-complexity/LevelComplexity";
import SelectMode from "./components/select-mode/SelectMode";
import { QuizQuestionLimit } from "@/features/quiz-questions";
import ButtonLinkStart from "./components/button-link-start/ButtonLinkStart";
function QuizSettings() {
  return (
    <>
      <div className={styles.interview_content}>
        <div className={styles.interview_title}>
          <p className={styles.title_text}>Собеседование</p>
        </div>
        <div className={styles.interview_blocks}>
          <div className={styles.left_block}>
            <SpecializationsList />
            <QuestionsCategories />
          </div>
          <div className={styles.right_block}>
            <LevelComplexity />
            <SelectMode />
            <QuizQuestionLimit />
          </div>
        </div>
      </div>

      <div className={styles.interview_buttonStart}>
        <ButtonLinkStart />
      </div>
    </>
  );
}

export default QuizSettings;
