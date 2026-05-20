import styles from "./Header.module.css";
import YeaHubIcon from "./icons/YeaHub_icon.svg";
import YeaHubLogo from "./icons/YeaHub_logo.svg";
import Burger_menu from "./icons/Burger_menu.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ModalBurgerNav } from "@/features/header-burger-menu";

const Header = () => {
  const [isOpenModalNav, setIsOpenModalNav] = useState(false);
  console.log(isOpenModalNav);

  return (
    <div className={styles.header}>
      <nav className={styles.header_nav}>
        <div className={styles.nav_wrap}>
          <Link to="/">
            <div className={styles.logo_wrap}>
              <img src={YeaHubIcon} alt="YeaHubIcon" />
              <img
                src={YeaHubLogo}
                alt="YeaHubLogo"
                className={styles.logo_text}
              />
            </div>
          </Link>
          {isOpenModalNav ? (
            <ModalBurgerNav setIsOpenModalNav={setIsOpenModalNav} />
          ) : null}
          <div className={styles.nav_list}>
            <Link to="/questions?page=1&limit=10" className={styles.item}>
              <p className={styles.item_text}>База вопросов</p>
            </Link>
            <Link to="/interview-settings" className={styles.item}>
              <p className={styles.item_text}>Тренажер</p>
            </Link>
            <a href="*" className={styles.item}>
              <p className={styles.item_text}>Материалы</p>
            </a>
          </div>
        </div>

        <div className={styles.nav_authorization_wrap}>
          <button
            className={styles.btn_burger_menu}
            onClick={() => {
              setIsOpenModalNav((prev) => !prev);
            }}
          >
            <img src={Burger_menu} alt="Burger_menu" />
          </button>
          <div className={styles.nav_authorization}>
            <a href="/" className={styles.link_login}>
              <p className={styles.login_text}>Вход</p>
            </a>
            <button className={styles.button_registration}>Регистрация</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
