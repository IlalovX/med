import { Tabs, TabsProps } from "antd";
import styles from "./admin-adverts-add.module.scss";
import AdminAdvertAddForm from "./components/AdminAdvertAddForm";
import { useState } from "react";

function AdminAdvertsAdd() {
  const [lngIndex, setLngIndex] = useState("1");

  const onChange = (key: string) => {
    setLngIndex(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Русский",
      children: <AdminAdvertAddForm lngIndex={lngIndex} />,
    },
    {
      key: "2",
      label: "Каракалпаксикий",
      children: <AdminAdvertAddForm lngIndex={lngIndex} />,
    },
    {
      key: "3",
      label: "Английский",
      children: <AdminAdvertAddForm lngIndex={lngIndex} />,
    },
    {
      key: "4",
      label: "Узбекский",
      children: <AdminAdvertAddForm lngIndex={lngIndex} />,
    },
  ];

  return (
    <div className={styles.admin_adverts_add}>
      <Tabs onChange={onChange} type="card" items={items} />
    </div>
  );
}

export default AdminAdvertsAdd;
