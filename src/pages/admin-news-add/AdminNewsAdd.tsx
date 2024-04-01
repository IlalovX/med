import { Tabs, TabsProps } from "antd";

import styles from "./admin-news-add.module.scss";
import AdminNewAddForm from "./components/AdminNewAddForm";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Русский",
    children: <AdminNewAddForm />,
  },
  {
    key: "2",
    label: "Каракалпаксикий",
    children: <AdminNewAddForm />,
  },
  {
    key: "3",
    label: "Английский",
    children: <AdminNewAddForm />,
  },
  {
    key: "4",
    label: "Узбекский",
    children: <AdminNewAddForm />,
  },
];

const onChange = (key: string) => {
  console.log(key);
};

function AdminNewsAdd() {
  return (
    <div className={styles.admin_news_add}>
      <Tabs onChange={onChange} type="card" items={items} />
    </div>
  );
}

export default AdminNewsAdd;
