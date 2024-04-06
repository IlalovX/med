import { SCIENTIFIC } from "../../../constans/data";
import { ComponentType } from "react";
import Talented from "./components/Talented";
import Quality from "./components/Quality";
import Education from "./components/Education";
import Master from "./components/Master";
import Residency from "./components/Residency";
import Relations from "./components/Relations";
import Research from "./components/Research";
import Gifted from "./components/Gifted";
import { useParams } from "react-router-dom";

const componentsArray: ComponentType[] = [
  Quality,
  Education,
  Master,
  Residency,
  Relations,
  Research,
  Gifted,
  Talented,
];

const routesArray = [
  "education_quality_department",
  "education_department",
  "master_department",
  "clinical_residency_department",
  "international_relations_department",
  "scientific_research_department",
  "gifted_students",
  "talented_students",
];

function AdminScientific() {
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
      {SCIENTIFIC.map((item) => (
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

export default AdminScientific;
