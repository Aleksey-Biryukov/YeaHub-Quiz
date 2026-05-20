import type { ModalProps } from "../../model/types";
import styles from "./ModalOpenQuestion.module.css";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app";
import { setCurrentIndex, setCurrentPage } from "@/entities/base-questions";

function Modal({ setIsOpenModal, index, setQuestionIsOpenID }: ModalProps) {
  const dispatch = useAppDispatch();
  const dataSelector = useAppSelector((store) => store.questionsSessionSlice);

  const filtersParams = useAppSelector(
    (store) => store.questionsSessionSlice.filters,
  );
  const page = filtersParams.page ?? 1;
  const limit = filtersParams.limit ?? 10;
  return (
    <div className={styles.modal} data-modal="true">
      <Link
        to={`/questions/${(page - 1) * limit + (index + 1)}`}
        onClick={() => {
          setIsOpenModal(false);
          setQuestionIsOpenID(null);
          dispatch(setCurrentIndex(index));
          dispatch(setCurrentPage(filtersParams.page ?? 10));
          localStorage.setItem(
            "questionsSession",
            JSON.stringify({
              questions: dataSelector.questions,
              filters: filtersParams,
              currentIndex: index,
              totalQuestions: dataSelector.totalQuestions,
              currentPage: dataSelector.currentPage,
            }),
          );
        }}
      >
        <div className={styles.modal_item}>Подробнее</div>
      </Link>

      <div className={styles.modal_item}>Изучено</div>
      <div className={styles.modal_item}>Заново</div>
      <div className={styles.modal_item}>Избранное</div>
    </div>
  );
}

export default Modal;
