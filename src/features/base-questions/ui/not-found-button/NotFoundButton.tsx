import { useSearchParams } from "react-router";
import styles from "./NotFoundButton.module.css";
import type { NotFoundButtonProps } from "../../model/types";

function NotFoundButton({ setQuestionsTitle }: NotFoundButtonProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className={styles.not_found_wrap}>
      <p className={styles.not_found_text}>Ничего не найдено</p>
      <button
        className={styles.not_found_button}
        onClick={() => {
          const newParams = new URLSearchParams(searchParams);
          newParams.delete("title");
          newParams.delete("specializationId");
          newParams.delete("skills");
          newParams.delete("complexity");
          newParams.delete("authorId");
          newParams.delete("keywords");
          newParams.delete("rate");
          newParams.set("page", "1");
          setSearchParams(newParams);
          setQuestionsTitle("");
        }}
      >
        Сбросить фильтры
      </button>
    </div>
  );
}

export default NotFoundButton;
