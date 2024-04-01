/// <reference types="vite-plugin-svgr/client" />
import { NavLink, useParams } from "react-router-dom";

import Arrow from "../../assets/svgs/arrow-circle-right.svg?react";

function AboutDepartment() {
  const { faculty } = useParams();

  return (
    <div className="bg-almost-blue">
      <div className="container mx-auto p-5 text-white space-y-10">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Кафедра акушерства и гинекологии
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <NavLink
            to={`/history_department_medical_faculty/${faculty}`}
            className="relative border border-white rounded-lg p-5  min-h-[120px] max-w-[500px]"
          >
            <span className="text-2xl sm:text-4xl">История</span>
            <Arrow className="w-[20xp] h-[20px] sm:w-[37px] sm:h-[37px] absolute bottom-5 right-5 " />
          </NavLink>
          <NavLink
            to={`/structure_department_medical_faculty/${faculty}`}
            className="relative border border-white rounded-lg p-5  h-52 max-w-[500px]"
          >
            <span className="text-2xl sm:text-4xl">Структура</span>
            <Arrow className="w-[20xp] h-[20px] sm:w-[37px] sm:h-[37px] absolute bottom-5 right-5 " />
          </NavLink>
          <NavLink
            to={`/spiritual_and_enlightening_department_medical_faculty/${faculty}`}
            className="relative border border-white rounded-lg p-5  h-52 max-w-[500px]"
          >
            <span className="text-2xl sm:text-4xl">
              Духовно-просветительская работа
            </span>
            <Arrow className="w-[20xp] h-[20px] sm:w-[37px] sm:h-[37px] absolute bottom-5 right-5 " />
          </NavLink>
          <NavLink
            to={`/methodological_department_medical_faculty/${faculty}`}
            className="relative border border-white rounded-lg p-5  h-52 max-w-[500px]"
          >
            <span className="text-2xl sm:text-4xl">
              Учебно-методическая работа
            </span>
            <Arrow className="w-[20xp] h-[20px] sm:w-[37px] sm:h-[37px] absolute bottom-5 right-5 " />
          </NavLink>
          <NavLink
            to={`/research_work_department_medical_faculty/${faculty}`}
            className="relative border border-white rounded-lg p-5  h-52 max-w-[500px]"
          >
            <span className="text-2xl sm:text-4xl">
              Научно-исследовательские работы
            </span>
            <Arrow className="w-[20xp] h-[20px] sm:w-[37px] sm:h-[37px] absolute bottom-5 right-5 " />
          </NavLink>
          <NavLink
            to={`/student_scientific_society_department_medical_faculty/${faculty}`}
            className="relative border border-white rounded-lg p-5  h-52 max-w-[500px]"
          >
            <span className="text-2xl sm:text-4xl">Научный кружок</span>
            <Arrow className="w-[20xp] h-[20px] sm:w-[37px] sm:h-[37px] absolute bottom-5 right-5 " />
          </NavLink>
          <NavLink
            to={`/international_partnership_department_medical_faculty/${faculty}`}
            className="relative border border-white rounded-lg p-5  h-52 max-w-[500px]"
          >
            <span className="text-2xl sm:text-4xl">
              Международное сотрудничество
            </span>
            <Arrow className="w-[20xp] h-[20px] sm:w-[37px] sm:h-[37px] absolute bottom-5 right-5 " />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AboutDepartment;
