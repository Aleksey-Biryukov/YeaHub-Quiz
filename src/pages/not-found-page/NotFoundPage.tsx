import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
function NotFoundPage() {
  return (
    <section className={styles.not_found}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>

        <h2 className={styles.title}>Страница не найдена</h2>

        <p className={styles.description}>
          Возможно, страница была удалена или адрес введён неверно.
        </p>

        <Link to="/" className={styles.home_link}>
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
