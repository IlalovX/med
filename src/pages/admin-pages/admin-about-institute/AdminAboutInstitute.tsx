import { NavLink } from "react-router-dom";
import { ABOUT_INSTITUTE } from "../../../constans/data";

const routesArray = [
  "information",
  "structure_university",
  "institute_statute",
  "institute_certificates",
  "internal_regulations",
  "educational_buildings",
  "laboratory_room",
  "life_students",
];

function AdminAboutInstitute() {
  return (
    <div className="container mx-auto p-5 grid grid-cols-2 gap-10 text-2xl font-bold">
      {ABOUT_INSTITUTE.map((item) => (
        <NavLink
          to={item.label.props.to}
          className="border border-black p-5 rounded-lg"
        >
          {item.label.props.children}
        </NavLink>
      ))}
    </div>
  );
}

export default AdminAboutInstitute;
