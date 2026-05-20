import { Link } from "react-router-dom";
import styles from "./ModalBurgerNav.module.css";
import type { ModalBurgerNavProps } from "../model/types";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

function ModalBurgerNav({ setIsOpenModalNav }: ModalBurgerNavProps) {
  const modalRef = useRef(null);

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalRef.current) {
      setIsOpenModalNav(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div className={styles.burger_overlay} ref={modalRef} onClick={closeModal}>
      <div className={styles.burger_list_wrap}>
        <div
          className={styles.burger_list}
          onClick={(event) => {
            const target = event.target as HTMLElement;

            if (target.closest("a")) {
              setIsOpenModalNav(false);
            }
          }}
        >
          <Link to="/questions?page=1&limit=10" className={styles.item}>
            <p className={styles.item_text}>База вопросов</p>
          </Link>
          <Link to="/interview-settings" className={styles.item}>
            <p className={styles.item_text}>Тренажер</p>
          </Link>
          <a href="/" className={styles.item}>
            <p className={styles.item_text}>Материалы</p>
          </a>
        </div>
        <div className={styles.btn_sign_in_wrap}>
          <button className={styles.btn_sign_in}>Войти</button>
        </div>
      </div>
    </div>,
    document.getElementById("header_burger")!,
  );
}

export default ModalBurgerNav;
