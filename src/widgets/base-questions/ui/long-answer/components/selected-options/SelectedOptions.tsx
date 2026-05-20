import type { SelectedOptionsProps } from "../../../../model/types";
import Skills_icon from "./icons/skills_icon.svg";
import styles from "./SelectedOptions.module.css";

function SelectedOptions({ question }: SelectedOptionsProps) {
  return (
    <div className={styles.selected_options_wrap}>
      <div className={styles.selected_options_content}>
        <div className={styles.selected_options_level}>
          <p className={styles.options_level_text}>Уровень:</p>
          <div className={styles.options_level_wrap}>
            <div className={styles.option_block}>
              Сложность:
              <div className={styles.block_value}>{question.complexity}</div>
            </div>
            <div className={styles.option_block}>
              Рейтинг:
              <div className={styles.block_value}>{question.rate}</div>
            </div>
          </div>
        </div>
        <div className={styles.selected_options_skills}>
          <p className={styles.options_skills_text}>Навыки:</p>
          <ul className={styles.options_skills_list}>
            {question.questionSkills.map((skill) => (
              <li key={skill.id} className={styles.list_item}>
                <img src={Skills_icon} alt="Навык" />
                {skill.title}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.selected_options_keywords}>
          <p className={styles.keywords_text}>Ключевые слова:</p>
          <ul className={styles.keywords_list}>
            {question.keywords.map((word, index) => (
              <li key={index}>
                <p className={styles.keywords_link_text}>#{word}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.selected_options_author}>
          <p className={styles.author_text}>Автор:</p>

          <p className={styles.author_link_text}>
            {question.createdBy?.username || question.updatedBy?.username}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SelectedOptions;
