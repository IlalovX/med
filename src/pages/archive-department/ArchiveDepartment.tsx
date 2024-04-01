import image from "../../assets/images/cabinets/Graduation.png";
function ArchiveDepartment() {
  return (
    <div className="container mx-auto space-y-10 p-5">
      <h1 className="text-2xl  sm:text-4xl font-bold">Архив института</h1>
      <div
        key={1}
        className="flex flex-col items-center justify-center sm:flex-row gap-10"
      >
        <img
          src={image}
          className="w-full min-h-[220px] min-w-[170px] sm:max-h-[520px] sm:max-w-[400px]"
        />
        <div className="w-full sm:relative">
          <h3 className="text-2xl sm:text-4xl font-bold">Esther Howard</h3>
          <h4 className="text-xl sm:text-3xl">Декан лечебного факультета №1</h4>
          <ul className="mt-10 sm:absolute  sm:bottom-[40%] sm:left-0 text-xs sm:text-xl min-h-[220px]">
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
      <p className="text-xl sm:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore{" "}
      </p>
      <p className="text-xl sm:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore{" "}
      </p>
      <p className="text-xl sm:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore{" "}
      </p>
      <p className="text-xl sm:text-2xl">
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

export default ArchiveDepartment;
