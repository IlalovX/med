import { STRUCTURE } from "../../../constans/data";
import image from "../../../assets/images/management/Учебнобной работе.png";
function ClinicalResidencyDepartment() {
  return (
    <div className="container mx-auto p-5 space-y-5">
      <h1 className="text-4xl font-bold">Клиническая ординатура</h1>
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
      <p className="text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore{" "}
      </p>
      <p className="text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore{" "}
      </p>
      <p className="text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore{" "}
      </p>
      <p className="text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore{" "}
      </p>
    </div>
  );
}

export default ClinicalResidencyDepartment;
