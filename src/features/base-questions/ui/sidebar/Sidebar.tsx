import styles from "./Sidebar.module.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { specializationsApi } from "@/entities/specializations";
import type { SidebarProps } from "../../model/types";
import { useGetSkillsQuery } from "@/entities/skills";

function Sidebar({ setQuestionsTitle }: SidebarProps) {
  const { data: specializations } =
    specializationsApi.useGetSpecializationsQuery(undefined, {
      refetchOnMountOrArgChange: true,
    });

  const { data: skills } = useGetSkillsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(
    () => searchParams.get("title") || "",
  );

  const [showSpecializacion, setShowSpecializacion] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const arrSpecializationsNumber = [
    26, 11, 25, 27, 28, 32, 33, 34, 35, 36, 37, 19, 20, 21, 23, 39, 40, 29, 24,
  ];

  const arrSpecializations = specializations?.data?.filter((item) =>
    arrSpecializationsNumber.includes(item.id),
  );

  const arrSkillId = [15, 6, 1, 22, 3, 7, 34, 28, 50, 8, 53, 12, 27, 2];
  const arrSkillActual = skills?.data?.filter((item) =>
    arrSkillId.includes(item.id),
  );

  const ArrRating = [1, 2, 3, 4, 5];

  useEffect(() => {
    const titleFromUrl = searchParams.get("title") || "";
    if (titleFromUrl !== inputValue) {
      requestAnimationFrame(() => {
        setInputValue(titleFromUrl);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const timeOutRef = useRef<number | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (timeOutRef.current) clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(() => {
      const newParams = new URLSearchParams(searchParams);
      if (value) {
        newParams.set("title", value);
      } else {
        newParams.delete("title");
      }
      newParams.set("page", "1");
      setSearchParams(newParams);
    }, 500);
  };

  const setComplexity = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.dataset.complexity;

    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      const current = searchParams.get("complexity");
      if (current === value) {
        next.delete("complexity");
      } else {
        next.set("complexity", String(value));
      }
      next.set("page", "1");
      return next;
    });
  };

  useEffect(() => {
    return () => {
      if (timeOutRef.current) {
        clearTimeout(timeOutRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.sidebar_wrapper}>
      <div className={styles.sidebar_search}>
        <input
          type="text"
          placeholder="Введите запрос…"
          className={styles.sidebar_search_input}
          value={inputValue}
          onChange={handleSearchChange}
        />
      </div>
      <div className={styles.sidebar_spec}>
        <p className={styles.sidebar_spec_text}>Специализация</p>
        <ul
          className={`
          ${styles.sidebar_spec_items}
          ${showSpecializacion ? styles.show : ""}`}
        >
          {arrSpecializations?.map((item) => (
            <li
              key={item.id}
              className={`
                ${styles.sidebar_spec_item}
                ${searchParams.get("specializationId") === String(item.id) ? styles.active : ""}
                `}
              onClick={() => {
                const current = searchParams.get("specializationId");
                if (current === String(item.id)) {
                  setQuestionsTitle("");
                } else {
                  setQuestionsTitle(item.title);
                }

                setSearchParams((prev) => {
                  const next = new URLSearchParams(prev);
                  const current = searchParams.get("specializationId");
                  if (current === String(item.id)) {
                    next.delete("specializationId");
                  } else {
                    next.set("specializationId", String(item.id));
                  }
                  next.set("page", "1");
                  return next;
                });
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div className={styles.sidebar_spec_option_container}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setShowSpecializacion((prev) => !prev);
            }}
          >
            <p className={styles.sidebar_spec_optional_showall}>
              {showSpecializacion ? "Свернуть" : "Посмотреть все"}
            </p>
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setQuestionsTitle("");
              setSearchParams((prev) => {
                const next = new URLSearchParams(prev);
                next.delete("specializationId");
                next.set("page", "1");
                return next;
              });
            }}
          >
            <p className={styles.sidebar_spec_optional_reset}>Сбросить</p>
          </a>
        </div>
      </div>
      <div className={styles.sidebar_skills}>
        <p className={styles.sidebar_skills_text}>Навыки</p>
        <ul
          className={`
            ${styles.sidebar_skills_items}
          ${showSkills ? styles.show : ""}`}
        >
          {arrSkillActual?.map((item) => {
            return (
              <li
                key={item.id}
                className={`
                ${styles.sidebar_skills_item}
                ${searchParams.get("skills") === String(item.id) ? styles.active : ""}`}
                onClick={() => {
                  setSearchParams((prev) => {
                    const next = new URLSearchParams(prev);
                    const current = searchParams.get("skills");
                    if (current === String(item.id)) {
                      next.delete("skills");
                    } else {
                      next.set("skills", String(item.id));
                    }
                    next.set("page", "1");
                    return next;
                  });
                }}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        <div className={styles.sidebar_skills_option_container}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setShowSkills((prev) => !prev);
            }}
          >
            <p className={styles.sidebar_skills_option_showall}>
              {showSkills ? "Свернуть" : "Посмотреть все"}
            </p>
          </a>
          <a href="/">
            <p
              className={styles.sidebar_skills_option_reset}
              onClick={(e) => {
                e.preventDefault();
                setSearchParams((prev) => {
                  const next = new URLSearchParams(prev);
                  next.delete("skills");
                  next.set("page", "1");
                  return next;
                });
              }}
            >
              Сбросить
            </p>
          </a>
        </div>
      </div>
      <div className={styles.sidebar_complexity}>
        <p className={styles.sidebar_complexity_text}>Уровень сложности</p>
        <ul className={styles.sidebar_complexity_items}>
          <div
            data-complexity="1,2,3"
            className={`
                ${styles.sidebar_complexity_item}
                ${searchParams.get("complexity") === "1,2,3" ? styles.active : ""}`}
            onClick={setComplexity}
          >
            1-3
          </div>
          <div
            data-complexity="4,5,6"
            className={`
                ${styles.sidebar_complexity_item}
                ${searchParams.get("complexity") === "4,5,6" ? styles.active : ""}`}
            onClick={setComplexity}
          >
            4-6
          </div>
          <div
            data-complexity="7,8"
            className={`
                ${styles.sidebar_complexity_item}
                ${searchParams.get("complexity") === "7,8" ? styles.active : ""}`}
            onClick={setComplexity}
          >
            7-8
          </div>
          <div
            data-complexity="9,10"
            className={`
                ${styles.sidebar_complexity_item}
                ${searchParams.get("complexity") === "9,10" ? styles.active : ""}`}
            onClick={setComplexity}
          >
            9-10
          </div>
        </ul>
      </div>
      <div className={styles.sidebar_rating}>
        <p className={styles.sidebar_rating_text}>Рейтинг</p>
        <ul className={styles.sidebar_rating_items}>
          {ArrRating.map((number) => (
            <li
              key={number}
              className={`
            ${styles.sidebar_rating_item}
            ${searchParams.get("rate") === String(number) ? styles.active : ""}
            `}
              onClick={() => {
                setSearchParams((prev) => {
                  const next = new URLSearchParams(prev);
                  const current = searchParams.get("rate");
                  if (current === String(number)) {
                    next.delete("rate");
                  } else {
                    next.set("rate", String(number));
                  }
                  next.set("page", "1");
                  return next;
                });
              }}
            >
              {number}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.sidebar_status}>
        <p className={styles.sidebar_status_text}>Статус</p>
        <div className={styles.sidebar_status_items}>
          <div className={styles.sidebar_status_item}>Изученные</div>
          <div className={styles.sidebar_status_item}>Не изученные</div>
          <div className={styles.sidebar_status_item}>Все</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
