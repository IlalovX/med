import { useParams } from "react-router-dom";
import { ABOUT_INSTITUTE } from "../../constans/data";
import { ComponentType } from "react";
import Information from "./components/Information";
import InstituteCertificates from "./components/InstituteCertificates";
import InstituteStatute from "./components/InstituteStatute";
import InternalRegulations from "./components/InternalRegulations";
import LaboratoryRoom from "./components/LaboratoryRoom";
import LifeStudents from "./components/LifeStudents";
import StructureUniversity from "./components/StructureUniversity";

const componentsArray: ComponentType[] = [
  Information,
  InstituteCertificates,
  InstituteStatute,
  InternalRegulations,
  LaboratoryRoom,
  LifeStudents,
  StructureUniversity,
];

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
  const { type } = useParams();
  if (type) {
    for (let item of routesArray) {
      if (item === type) {
        const Component = componentsArray[routesArray.indexOf(item)];
        return <Component />;
      }
    }
  }
  return (
    <div className="container mx-auto p-5 grid grid-cols-2 gap-10">
      {ABOUT_INSTITUTE.map((item) => (
        <p
          className="border border-black h-24 text-2xl font-bold p-5 rounded-lg"
          key={item.key}
        >
          {item.label}
        </p>
      ))}
    </div>
  );
}

export default AdminAboutInstitute;
