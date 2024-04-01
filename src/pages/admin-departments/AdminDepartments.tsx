import { DEPARTMENTS } from "../../constans/data";

function AdminDepartments() {
  return (
    <div className="container mx-auto p-5 grid grid-cols-2 gap-10">
      {DEPARTMENTS.map((item) => (
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

export default AdminDepartments;
