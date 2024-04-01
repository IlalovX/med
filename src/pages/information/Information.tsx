import CabinetClassroom from "../../assets/images/cabinets/Classroom.png";
import CabinetLibrary from "../../assets/images/cabinets/Library.png";
import CabinetPractice from "../../assets/images/cabinets/Practice.png";
import CabinetGraduation from "../../assets/images/cabinets/Graduation.png";
import Faculty from "../../assets/images/faculty/Факультет фото.png";

function Information() {
  return (
    <>
      <section className=" bg-almost-red p-5">
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-5 sm:flex-row justify-between mb-12">
            <h1 className="text-2xl text-black sm:text-3xl">Об институте</h1>
            <p className="text-white text-2xl sm:text-4xl w-[40%]">
              {`  Образование - не подготовка\n к жизни;\n Образование - это самая жизнь`}
            </p>
          </div>
          <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:gap-0  lg:items-end lg:justify-end sm:space-x-10 my-6">
            <img
              src={CabinetClassroom}
              className="sm:w-50 sm:h-80  lg:w-[400px] lg:h-[500px]"
            />
            <img
              src={CabinetLibrary}
              className="sm:w-50 sm:h-80  lg:w-[400px] lg:h-[500px] "
            />
          </div>
          <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:flex lg:flex-row    sm:space-x-10 my-6">
            <img
              src={CabinetPractice}
              className="sm:w-50 sm:h-80  lg:w-[400px] lg:h-[500px]"
            />
            <img
              src={CabinetGraduation}
              className="sm:w-50 sm:h-80 lg:w-[400px] lg:h-[500px]"
            />
          </div>
          <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:gap-0  lg:items-end lg:justify-end sm:space-x-10 my-6">
            <img
              src={CabinetClassroom}
              className="sm:w-50 sm:h-80  lg:w-[400px] lg:h-[500px]"
            />
            <img
              src={CabinetLibrary}
              className="sm:w-50 sm:h-80  lg:w-[400px] lg:h-[500px] "
            />
          </div>
        </div>
      </section>

      <section className="bg-almost-blue py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-5 text-center  sm:flex sm:justify-between text-white">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold mb-2">10 000</h2>
              <span className="text-xl sm:text-2xl">Студентов</span>
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold mb-2">500</h2>
              <span className="text-xl sm:text-2xl">Учебных процесс</span>
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold mb-2">700</h2>
              <span className="text-xl sm:text-2xl">Профессоров</span>
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold mb-2">20</h2>
              <span className="text-xl sm:text-2xl">Факультетов</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-5 py-10">
        <h1 className="text-4xl font-bold">Об институте</h1>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore
        </p>
        <div className="flex justify-between gap-x-10">
          <img
            src={Faculty}
            className="w-full sm:w-[60%] object-cover max-h-[510px]"
          />
          <p className="text-2xl hidden sm:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut{" "}
          </p>
        </div>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore
        </p>
      </section>
    </>
  );
}

export default Information;
