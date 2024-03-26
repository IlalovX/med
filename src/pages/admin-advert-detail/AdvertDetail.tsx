import { NavLink, useParams } from "react-router-dom";
import { ComponentType } from "react";
import Arrow from "../../assets/svgs/arrow-circle-right.svg";
import Classification from "./components/classification/Classification";
import Council from "./components/council/Council";
import Department from "./components/department/Department";
import Educational from "./components/educational/Educational";
import History from "./components/history/History";
import Research from "./components/research/Research";
import Society from "./components/society/Society";
import Structure from "./components/structure/Structure";
import { useTranslation } from "react-i18next";

import styles from "./advert-detail.module.scss";

const FACULTY_INFO = [
  "classification",
  "history",
  "structure",
  "departments",
  "research_activities",
  "educational_and_methodological_work",
  "student_scientific_society",
  "composition_academic_council",
];

const componentsArray: ComponentType<any>[] = [
  Classification,
  History,
  Structure,
  Department,
  Research,
  Educational,
  Society,
  Council,
];

const directionsArray = [
  "classification",
  "history",
  "structure",
  "department",
  "research",
  "educational",
  "society",
  "council",
];

function AdvertDetail() {
  const { t } = useTranslation("education");
  const { facultyId, type } = useParams();

  if (facultyId && type) {
    for (let item of directionsArray) {
      if (item === type) {
        const Component = componentsArray[directionsArray.indexOf(item)];
        return (
          <div className={`${styles.direction} + ${styles.faculty}`}>
            <div className={styles.components}>
              <Component />
            </div>
          </div>
        );
      }
    }
  }
  return (
    <div className={styles.faculties}>
      <div className={styles.faculties_container}>
        {FACULTY_INFO.map((el, index) => (
          <NavLink
            to={`/admin/adverts/${facultyId}/${directionsArray[index]}`}
            className={styles.card}
            key={index}
          >
            {t(el)}
            <img src={Arrow} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default AdvertDetail;
