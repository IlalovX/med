import { Tabs, TabsProps } from "antd";
import styles from "./admin-adverts-add.module.scss";
import AdminAdvertAddForm from "./components/AdminAdvertAddForm";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Русский",
    children: <AdminAdvertAddForm />,
  },
  {
    key: "2",
    label: "Каракалпаксикий",
    children: <AdminAdvertAddForm />,
  },
  {
    key: "3",
    label: "Английский",
    children: <AdminAdvertAddForm />,
  },
  {
    key: "4",
    label: "Узбекский",
    children: <AdminAdvertAddForm />,
  },
];

const onChange = (key: string) => {
  console.log(key);
};
function AdminAdvertsAdd() {
  return (
    <div className={styles.admin_adverts_add}>
      <Tabs onChange={onChange} type="card" items={items} />
    </div>
  );
}

export default AdminAdvertsAdd;
