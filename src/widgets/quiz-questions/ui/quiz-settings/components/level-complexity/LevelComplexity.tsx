import styles from "./LevelComplexity.module.css";

const levelsComplexity = ["1-3", "4-6", "7-8", "9-10"];
function LevelComplexity() {
  return (
    <div className={styles.complexity_wrapper}>
      <div className={styles.complexity_title}>
        <p className={styles.title_text}>Уровень сложности</p>
      </div>
      <ul className={styles.complexity_list}>
        {levelsComplexity.map((item, index) => (
          <li key={index} className={styles.list_item}>
            <p className={styles.item_text}>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LevelComplexity;
