import { STRUCTURE } from "../../constans/data";
import image from "../../assets/images/management/Работе с молодежью.png";
function StructureMedicalFaculty() {
  return (
    <div className="container mx-auto py-5">
      <h1 className="text-4xl font-bold mb-10">Структура </h1>
      <div className="space-y-10">
        {STRUCTURE.map((item, index) => (
          <div key={index} className="flex gap-x-10">
            <img src={image} />
            <div className="relative">
              <h3 className="text-4xl font-bold">{item.name}</h3>
              <h4 className="text-3xl">{item.profession}</h4>
              <ul className="absolute bottom-[40%] left-0 text-xl">
                <li>
                  <span className="font-semibold mr-4">Время приема:</span>
                  {item.time}
                </li>
                <li>
                  <span className="font-semibold mr-4">Телефон:</span>
                  {item.phone}
                </li>
                <li>
                  <span className="font-semibold mr-4">Email:</span>
                  {item.email}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StructureMedicalFaculty;
