import { useParams } from "react-router-dom";

function MagScheduleDetail() {
  const { faculty, id } = useParams();
  return (
    <div className="bg-almost-blue">
      <div className="container mx-auto p-5 space-y-5 text-white">
        <h1 className="text-2xl sm:text-4xl">
          {faculty === "med_1"
            ? "Лечебный факультет 1"
            : "Лечебный факультет 2"}
        </h1>
        <h2 className="text-xs sm:text-xl">{id} курс</h2>
        <div className="bg-white w-full min-h-[300px] sm:min-h-[900px]"></div>
      </div>
    </div>
  );
}

export default MagScheduleDetail;
