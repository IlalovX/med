import styles from "./admin-edit.module.scss";
import AdminEditForm from "./components/AdminEditForm";
import { getContacts } from "../../services/queries";

function AdminEdit() {
  const { data } = getContacts();

  return (
    <div className={styles.admin_edit}>
      <AdminEditForm />
    </div>
  );
}

export default AdminEdit;
