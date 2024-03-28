import image from "../../assets/images/management/Учебнобной работе.png";
function Accounting() {
  return (
    <div className="container mx-auto space-y-5 p-5">
      <h1 className="text-4xl font-bold">Отдел бухгалтерии</h1>
      <div key={1} className="flex gap-x-10">
        <img src={image} />
        <div className="relative">
          <h3 className="text-4xl font-bold">Esther Howard</h3>
          <h4 className="text-3xl">Декан лечебного факультета №1</h4>
          <ul className="absolute bottom-[40%] left-0 text-xl">
            <li>
              <span className="font-semibold mr-4">Время приема:</span>
              Понедельник-Суббота: 08:30-17:00
            </li>
            <li>
              <span className="font-semibold mr-4">Телефон:</span>
              +998901234567
            </li>
            <li>
              <span className="font-semibold mr-4">Email:</span>
              esther@gmail.com
            </li>
          </ul>
        </div>
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

export default Accounting;
