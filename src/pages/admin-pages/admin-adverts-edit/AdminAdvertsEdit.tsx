import { Tabs, TabsProps } from "antd";
import { useState } from "react";
import AdminAdvertEditForm from "./components/AdminAdvertEditForm";

function AdminAdvertsEdit() {
  const [lngIndex, setLngIndex] = useState("1");

  const onChange = (key: string) => {
    setLngIndex(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Русский",
      children: <AdminAdvertEditForm lngIndex={lngIndex} />,
    },
    {
      key: "2",
      label: "Каракалпаксикий",
      children: <AdminAdvertEditForm lngIndex={lngIndex} />,
    },
    {
      key: "3",
      label: "Английский",
      children: <AdminAdvertEditForm lngIndex={lngIndex} />,
    },
    {
      key: "4",
      label: "Узбекский",
      children: <AdminAdvertEditForm lngIndex={lngIndex} />,
    },
  ];
  return (
    <>
      <Tabs onChange={onChange} type="card" items={items} />
    </>
  );
}

export default AdminAdvertsEdit;
