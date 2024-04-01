import { Tabs, TabsProps } from "antd";
import { useState } from "react";
import AdminUserAddForm from "./components/AdminUserAddForm";

import styles from "./admin-users-add.module.scss";

function AdminUsersAdd() {
  const [lngIndex, setLngIndex] = useState("1");

  const onChange = (key: string) => {
    setLngIndex(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Русский",
      children: <AdminUserAddForm />,
    },
    {
      key: "2",
      label: "Каракалпаксикий",
      children: <AdminUserAddForm />,
    },
    {
      key: "3",
      label: "Английский",
      children: <AdminUserAddForm />,
    },
    {
      key: "4",
      label: "Узбекский",
      children: <AdminUserAddForm />,
    },
  ];
  return (
    <div className={styles.admin_users_add}>
      <Tabs onChange={onChange} type="card" items={items} />
    </div>
  );
}

export default AdminUsersAdd;
