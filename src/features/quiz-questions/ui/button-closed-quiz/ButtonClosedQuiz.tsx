import { useNavigate } from "react-router";
import styles from "./ButtonClosedQuiz.module.css";
import { useAppDispatch } from "@/app";
import { clear } from "@/entities/quiz-questions";
import { clearSpecialization } from "@/entities/specializations";

function ButtonClosedQuiz() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <button
      className={styles.btn_wrapper}
      onClick={() => {
        dispatch(clear());
        dispatch(clearSpecialization());

        navigate("/interview-settings");
      }}
    >
      <p className={styles.btn_text}>Завершить</p>
    </button>
  );
}

export default ButtonClosedQuiz;
