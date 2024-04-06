/// <reference types="vite-plugin-svgr/client" />
import { NavLink } from "react-router-dom";

import Arrow from "../../../assets/svgs/arrow-circle-right-black.svg?react";
function AdminDepartmentFaculty() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-10">Кафедры</h1>
      <div className="grid grid-cols-2 gap-10">
        <NavLink
          to={`/admin/about_department_medical_faculty/gynecology`}
          className="relative border border-black rounded-lg p-5  h-52"
        >
          <span className="text-4xl">Акушерства и гинекологии</span>

          <Arrow className="w-[37px] h-[37px] absolute bottom-5 right-5 " />
        </NavLink>
        <NavLink
          to={`/admin/about_department_medical_faculty/surgical_diseases`}
          className="relative border border-black rounded-lg p-5  h-52"
        >
          <span className="text-4xl">Хирургическое болезни</span>

          <Arrow className="w-[37px] h-[37px] absolute bottom-5 right-5 " />
        </NavLink>
        <NavLink
          to={`/admin/about_department_medical_faculty/hematology`}
          className="relative border border-black rounded-lg p-5  h-52"
        >
          <span className="text-4xl">Гематологии</span>

          <Arrow className="w-[37px] h-[37px] absolute bottom-5 right-5 " />
        </NavLink>
        <NavLink
          to={`/admin/about_department_medical_faculty/phthisiatry`}
          className="relative border border-black rounded-lg p-5  h-52"
        >
          <span className="text-4xl">Фтизиатрии и пульмонологии</span>

          <Arrow className="w-[37px] h-[37px] absolute bottom-5 right-5 " />
        </NavLink>
        <NavLink
          to={`/admin/about_department_medical_faculty/pediatrics`}
          className="relative border border-black rounded-lg p-5  h-52"
        >
          <span className="text-4xl">Педиатрия</span>

          <Arrow className="w-[37px] h-[37px] absolute bottom-5 right-5 " />
        </NavLink>
      </div>
    </div>
  );
}

export default AdminDepartmentFaculty;
