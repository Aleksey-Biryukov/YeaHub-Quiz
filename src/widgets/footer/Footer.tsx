import YeaHub_logo_white from "./icons/YeaHub_logo_white.svg?react";
import Figma from "./icons/figma.svg?react";
import Telegram from "./icons/telegram.svg?react";
import Youtube from "./icons/youtube.svg?react";
import Tiktok from "./icons/tiktok.svg?react";
import Github from "./icons/github.svg?react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <a href="/" className={styles.footer_logo}>
          <YeaHub_logo_white />
        </a>
        <p className={styles.footer_small_text}>
          Выбери, каким будет IT завтра, вместе с нами
        </p>
        <p className={styles.footer_medium_text}>
          YeaHub — это полностью открытый проект, призванный объединить и
          улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
          Дизайн проекта также открыт для ознакомления в Figma.
        </p>
        <div className={styles.media_links}>
          <div className={styles.media_documents}>
            <p>© 2024 YeaHub</p>
            <a href="/">
              <p className={styles.link_text_doc}>Документы</p>
            </a>
          </div>
          <div className={styles.media_link_item}>
            <p className={styles.link_text}>
              Ищите нас и в других соцсетях @yeahub_it
            </p>
            <a href="/">
              <Figma />
            </a>
            <a href="/">
              <Telegram />
            </a>
            <a href="/">
              <Youtube />
            </a>
            <a href="/">
              <Tiktok />
            </a>
            <a href="/">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
