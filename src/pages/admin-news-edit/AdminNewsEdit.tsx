import { Tabs, TabsProps } from "antd";
import AdminNewAddForm from "../admin-news-add/components/AdminNewAddForm";
import { useState } from "react";
import styles from "./admin-news-edit.module.scss";

function AdminNewsEdit() {
  const [lngIndex, setLngIndex] = useState("1");

  const onChange = (key: string) => {
    setLngIndex(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Русский",
      children: <AdminNewAddForm lngIndex={lngIndex} />,
    },
    {
      key: "2",
      label: "Каракалпаксикий",
      children: <AdminNewAddForm lngIndex={lngIndex} />,
    },
    {
      key: "3",
      label: "Английский",
      children: <AdminNewAddForm lngIndex={lngIndex} />,
    },
    {
      key: "4",
      label: "Узбекский",
      children: <AdminNewAddForm lngIndex={lngIndex} />,
    },
  ];
  return (
    <div className={styles.admin_news_add}>
      <Tabs onChange={onChange} type="card" items={items} />
    </div>
  );
  return <div>AdminNewsEdit</div>;
}

export default AdminNewsEdit;
