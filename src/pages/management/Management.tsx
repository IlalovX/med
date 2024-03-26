import Rector from "../../assets/images/management/Ректор.png";
import Image1 from "../../assets/images/management/Работе с молодежью.png";
import Image2 from "../../assets/images/management/Лечебной работе.png";
import Image3 from "../../assets/images/management/Международному сотрудничеству.png";
import Image4 from "../../assets/images/management/Научной работе.png";
import Image5 from "../../assets/images/management/Учебнобной работе.png";
import { NavLink } from "react-router-dom";

function Management() {
  return (
    <div className="container mx-auto py-5 space-y-5">
      <h1 className="text-4xl font-bold mb-10">Руководство</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-5">
        <NavLink to="/management/1">
          <img src={Rector} className="h-[510px]" />
        </NavLink>
        <NavLink to="/management/1">
          <img src={Image1} className="h-[510px]" />
        </NavLink>
        <NavLink to="/management/1">
          <img src={Image2} className="h-[510px]" />
        </NavLink>
        <NavLink to="/management/1">
          <img src={Image3} className="h-[510px]" />
        </NavLink>
        <NavLink to="/management/1">
          <img src={Image4} className="h-[510px]" />
        </NavLink>
        <NavLink to="/management/1">
          <img src={Image5} className="h-[510px]" />
        </NavLink>
      </div>
    </div>
  );
}

export default Management;
