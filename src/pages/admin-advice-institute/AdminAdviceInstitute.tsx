import { ADVICE_INSTITUTE } from "../../constans/data";
import { ComponentType } from "react";
import { useParams } from "react-router-dom";
import AcademicAgenda from "./components/AcademicAgenda";
import AcademicHandouts from "./components/AcademicHandouts";
import AcademicResolutions from "./components/AcademicResolutions";
import AcademicMembers from "./components/AcademicMembers";
import AcademicStatue from "./components/AcademicStatue";

const componentsArray: ComponentType[] = [
  AcademicStatue,
  AcademicMembers,
  AcademicAgenda,
  AcademicHandouts,
  AcademicResolutions,
];

const directionsArray = [
  "academic_council_statue",
  "academic_council_members",
  "academic_council_agenda",
  "academic_council_handouts",
  "academic_council_resolutions",
];

function AdminAdviceInstitute() {
  const { type } = useParams();
  if (type) {
    for (let item of directionsArray) {
      if (item === type) {
        const Component = componentsArray[directionsArray.indexOf(item)];
        return <Component />;
      }
    }
  }
  return (
    <div className="container mx-auto p-5 grid grid-cols-2 gap-10">
      {ADVICE_INSTITUTE.map((item) => (
        <p
          key={item.key}
          className="border border-black h-24 text-2xl font-bold p-5 rounded-lg"
        >
          {item.label}
        </p>
      ))}
    </div>
  );
}

export default AdminAdviceInstitute;
