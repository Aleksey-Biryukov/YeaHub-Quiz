import styles from "./MainPage.module.css";
import MainContainer from "./icons/MainContainer.svg?react";
import ImgSkills from "./icons/yeahub_skills.svg?react";
import ImgGuru from "./icons/image_guru.svg?react";
function MainPage() {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.left_container}>
        <div className={styles.left_block_one}>
          <ImgSkills />
          <ImgGuru />
        </div>
        <div className={styles.left_block_two}>
          <h1 className={styles.title}>
            ТРЕНАЖЁР IT‑СОБЕСЕДОВАНИЙ И БАЗА ВОПРОСОВ ДЛЯ УСПЕШНОЙ ПОДГОТОВКИ
          </h1>
          <p className={styles.description}>
            Стань частью сообщества YeaHub: изучай, практикуйся, развивай навыки
            и находи работу в IT
          </p>
          <button className={styles.join_button}>
            <p className={styles.join_button_text}>Вступить в сообщество</p>
          </button>
        </div>
      </div>
      <div className={styles.right_container}>
        <MainContainer />
      </div>
    </div>
  );
}

export default MainPage;
