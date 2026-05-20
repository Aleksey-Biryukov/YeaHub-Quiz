import styles from "./ModalSidebar.module.css";
import { Sidebar } from "@/features/base-questions";
import type { ModalSidebarProps } from "../model/types";
import Close_button from "./icons/Close_button.svg";
import { useEffect } from "react";
import { createPortal } from "react-dom";

function ModalSidebar({
  setIsOpenModalSidebar,
  setQuestionsTitle,
}: ModalSidebarProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeModalSidebar = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsOpenModalSidebar(false);
    }
  };

  return createPortal(
    <div className={styles.sidebar_overlay} onClick={closeModalSidebar}>
      <div className={styles.sidebar_modal_wrap}>
        <div className={styles.btn_close_wrap}>
          <button
            className={styles.btn_close_overlay}
            onClick={() => {
              setIsOpenModalSidebar(false);
            }}
          >
            <img src={Close_button} alt="Close_button" />
          </button>
        </div>

        <Sidebar setQuestionsTitle={setQuestionsTitle} />
      </div>
    </div>,
    document.getElementById("modal_sidebar")!,
  );
}

export default ModalSidebar;
