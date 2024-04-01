import doc from "../../assets/images/image 35.png";

function ScheduleSecMaster() {
  return (
    <div className="bg-almost-blue">
      <div className="container mx-auto p-5 text-white space-y-5">
        <h1 className="text-2xl sm:text-4xl">График проведения ГЭК</h1>
        <img src={doc} className="w-full min-h-[270px] " />
      </div>
    </div>
  );
}

export default ScheduleSecMaster;
