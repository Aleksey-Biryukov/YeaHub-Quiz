import styles from "./ButtonLinkStart.module.css";
import Arrow from "./icons/Arrow Right.svg?react";
import { useNavigate } from "react-router";

function ButtonLinkStart() {
  const navigate = useNavigate();

  return (
    <button
      className={styles.button}
      onClick={() => {
        navigate("/interview-quiz/1");
      }}
    >
      <p className={styles.button_text}>Начать</p>
      <div className={styles.button_icon}>
        <Arrow />
      </div>
    </button>
  );
}

export default ButtonLinkStart;
