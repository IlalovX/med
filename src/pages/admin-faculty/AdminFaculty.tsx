/// <reference types="vite-plugin-svgr/client" />
import { NavLink, useParams } from "react-router-dom";

import Arrow from "../../assets/svgs/arrow-circle-right-black.svg?react";
import { ComponentType } from "react";
import Council from "./components/Council";
import History from "./components/History";
import Methodological from "./components/Methodological";
import Qualification from "./components/Qualification";
import Research from "./components/Research";
import Scientific from "./components/Scientific";
import Structure from "./components/Structure";

import styles from "./admin-faculty.module.scss";

const componentsArray: ComponentType[] = [
  Qualification,
  History,
  Structure,
  Council,
  Methodological,
  Research,
  Scientific,
];

const directionsArray = [
  "qualification_medical_faculty",
  "history_medical_faculty",
  "structure_medical_faculty",
  "council_medical_faculty",
  "methodological_medical_faculty",
  "research_work_medical_faculty",
  "student_scientific_society_medical_faculty",
];

function AdminFaculty() {
  const { id, type } = useParams();
  if (id && type) {
    for (let item of directionsArray) {
      if (item === type) {
        const Component = componentsArray[directionsArray.indexOf(item)];
        return (
          <div className={styles.faculty}>
            <Component />
          </div>
        );
      }
    }
  } else if (id) {
    return (
      <div className={styles.faculty}>
        <div className="container  mx-auto text-black space-y-10 p-5">
          <h1 className="text-2xl sm:text-4xl mb-10">
            Лечебный факультет № {id}
          </h1>
          <div className="flex flex-col items-center justify-center sm:grid sm:grid-cols-2 gap-10">
            <NavLink
              to={`qualification_medical_faculty`}
              className="w-full relative border border-black rounded-lg p-5 min-h-40 sm:min-h-24 sm:min-h-52"
            >
              <span className="text-4xl">Классификация</span>

              <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
            </NavLink>
            <NavLink
              to={`history_medical_faculty`}
              className="w-full relative border border-black rounded-lg p-5  min-h-40 sm:min-h-52"
            >
              <span className="text-4xl">История</span>
              <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
            </NavLink>
            <NavLink
              to={`structure_medical_faculty`}
              className="w-full relative border border-black rounded-lg p-5  min-h-40 sm:min-h-52"
            >
              <span className="text-4xl">Структура</span>
              <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
            </NavLink>
            <NavLink
              to={`council_medical_faculty`}
              className=" relative border border-black rounded-lg p-5  min-h-40 sm:min-h-52"
            >
              <span className="text-4xl">Состав ученого совета</span>
              <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
            </NavLink>
            <NavLink
              to={`/admin/departments`}
              className="w-full relative border border-black rounded-lg p-5 min-h-40 sm:min-h-24 sm:min-h-52"
            >
              <span className="text-4xl">Кафедры</span>
              <Arrow className="w-[37px] h-[37px] absolute bottom-5-5 right-5" />
            </NavLink>
            <NavLink
              to={`methodological_medical_faculty`}
              className="w-full relative border border-black rounded-lg p-5 min-h-40 sm:min-h-24 sm:min-h-52"
            >
              <span className="text-4xl">Научно-исследовательские работы</span>
              <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
            </NavLink>
            <NavLink
              to={`research_work_medical_faculty`}
              className="w-full relative border border-black rounded-lg p-5 min-h-40 sm:min-h-24 sm:min-h-52"
            >
              <span className="text-4xl">Учебно-методическая работа </span>
              <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
            </NavLink>
            <NavLink
              to={`student_scientific_society_medical_faculty`}
              className="w-full relative border border-black rounded-lg p-5 min-h-40 sm:min-h-24 sm:min-h-52"
            >
              <span className="text-4xl">Студенческое научное общество</span>
              <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminFaculty;
