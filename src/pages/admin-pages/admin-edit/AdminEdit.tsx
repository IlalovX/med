import AdminEditForm from "./components/AdminEditForm";
import { getContacts } from "../../../services/queries";

function AdminEdit() {
  const { data } = getContacts();

  return (
    <>
      <AdminEditForm />
    </>
  );
}

export default AdminEdit;
