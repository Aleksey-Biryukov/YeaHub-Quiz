import styles from "./QuestionsCategories.module.css";

const arrCategories = [
  "Figma",
  "Wireframing",
  "CSS",
  "Wireframing",
  "HTML",
  "Figma",
  "Wireframing",
];
function QuestionsCategories() {
  return (
    <div className={styles.categories_wrapper}>
      <div className={styles.categories_title}>
        <p className={styles.title_text}>Выбор специализации</p>
      </div>
      <ul className={styles.categories_list}>
        {arrCategories.map((item, index) => (
          <li key={index} className={styles.list_item}>
            <p className={styles.item_text}>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionsCategories;
