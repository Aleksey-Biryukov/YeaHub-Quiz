import styles from "./Pagination.module.css";
import Left from "./icons/left_arrow.svg";
import Right from "./icons/right_arrow.svg";
import ThreeDots from "./icons/three_dots.svg";
import { useSearchParams } from "react-router-dom";
import getPaginationNumbers from "./lib/getPaginationNumbers";
import type { PaginationProps } from "../../model/types";

function Pagination({ totalPages }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") || "1");
  const paginationNumbers: ReturnType<typeof getPaginationNumbers> =
    getPaginationNumbers(currentPage, totalPages);

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination_container}>
      <button
        disabled={currentPage <= 1}
        className={styles.pagination_button_arrow}
        onClick={() => {
          setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            if (currentPage <= 1) next.set("page", String(1));
            else next.set("page", String(currentPage - 1));
            return next;
          });
        }}
      >
        <img src={Left} alt="Стрелка влево" />
      </button>
      <div className={styles.pagination_numbers}>
        {paginationNumbers.map((number, index) => {
          const isActive = number === currentPage;
          if (number === "…" || number === "...") {
            return (
              <div key={index} className={styles.pagination_dots_wrap}>
                <img
                  src={ThreeDots}
                  alt="Три точки"
                  className={styles.pagination_dots_img}
                />
              </div>
            );
          }
          return (
            <button
              className={`
                ${styles.pagination_button}
                ${isActive ? styles.active : ""}`}
              key={index}
              disabled={isActive}
              onClick={() => {
                setSearchParams((prev) => {
                  const next = new URLSearchParams(prev);
                  next.set("page", String(number));
                  return next;
                });
              }}
            >
              {number}
            </button>
          );
        })}
      </div>
      <button
        className={styles.pagination_button_arrow}
        disabled={currentPage === totalPages}
        onClick={() => {
          setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            if (currentPage >= totalPages) next.set("page", String(totalPages));
            else next.set("page", String(currentPage + 1));
            return next;
          });
        }}
      >
        <img src={Right} alt="Стрелка вправо" />
      </button>
    </div>
  );
}

export default Pagination;
