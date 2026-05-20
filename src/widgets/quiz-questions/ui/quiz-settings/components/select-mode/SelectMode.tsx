import styles from "./SelectMode.module.css";

const selectsMode = ["Повторение", "Только новые", "Случайные"];

function SelectMode() {
  return (
    <div className={styles.selectMode_wrapper}>
      <div className={styles.selectMode_title}>
        <p className={styles.title_text}>Уровень сложности</p>
      </div>
      <ul className={styles.selectMode_list}>
        {selectsMode.map((item, index) => (
          <li key={index} className={styles.list_item}>
            <p className={styles.item_text}>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectMode;
