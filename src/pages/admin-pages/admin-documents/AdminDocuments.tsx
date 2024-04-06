import { ComponentType } from "react";
import AboutDocuments from "./components/AboutDocuments";
import OrdersMinistry from "./components/OrdersMinistry";
import StatePrograms from "./components/StatePrograms";
import { useParams } from "react-router-dom";
import { DOCUMENTS } from "../../../constans/data";

const componentsArray: ComponentType[] = [
  AboutDocuments,
  OrdersMinistry,
  StatePrograms,
];

const routesArray = ["about_documents", "ministry_documents", "state_programs"];

function AdminDocuments() {
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
      {DOCUMENTS.map((item) => (
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

export default AdminDocuments;
