import { FACULTIES } from "../../../constans/data";

function AdminFaculties() {
  return (
    <div className="container grid grid-cols-2 gap-10  mx-auto text-black ">
      {FACULTIES.map((item) => (
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

export default AdminFaculties;
