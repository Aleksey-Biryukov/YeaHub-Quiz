import { specializationsApi } from "@/entities/specializations";
import {
  clearSpecialization,
  setSpecialization,
} from "@/entities/specializations";
import styles from "./SpecializationsList.module.css";
import { useAppDispatch, useAppSelector } from "@/app";

function SpecializationsList() {
  const { data: specializations } =
    specializationsApi.useGetSpecializationsQuery(undefined, {
      refetchOnMountOrArgChange: true,
    });

  const arrSpecializationsNumber = [
    26, 11, 25, 27, 28, 32, 33, 34, 35, 36, 37, 19, 20, 21, 23, 39, 40, 29, 24,
  ];

  const filteredSpecializations = specializations?.data?.filter((item) =>
    arrSpecializationsNumber.includes(item.id),
  );
  const dispatch = useAppDispatch();
  const selectedSpecId = useAppSelector(
    (appStore) => appStore.specialization.selectedId,
  );

  return (
    <div className={styles.spec_wrapper}>
      <div className={styles.spec_title}>
        <p className={styles.title_text}>Выбор специализации</p>
      </div>
      <ul className={styles.spec_list}>
        {filteredSpecializations?.map((item) => (
          <li
            key={item.id}
            className={`
        ${styles.list_item}
        ${selectedSpecId === item.id ? styles.active : ""}
            `}
            onClick={() => {
              if (item.id !== selectedSpecId)
                dispatch(setSpecialization(item.id));
              if (item.id === selectedSpecId) dispatch(clearSpecialization());
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpecializationsList;
