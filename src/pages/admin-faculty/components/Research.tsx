import { Tabs, TabsProps } from "antd";
import { useState } from "react";
import SampleFirst from "../../../components/sample-first/SampleFirst";

function Research() {
  const [lngIndex, setLngIndex] = useState("1");

  const onChange = (key: string) => {
    setLngIndex(key);
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Русский",
      children: <SampleFirst lngIndex={lngIndex} title="История" />,
    },
    {
      key: "2",
      label: "Каракалпаксикий",
      children: <SampleFirst lngIndex={lngIndex} title="История" />,
    },
    {
      key: "3",
      label: "Английский",
      children: <SampleFirst lngIndex={lngIndex} title="История" />,
    },
    {
      key: "4",
      label: "Узбекский",
      children: <SampleFirst lngIndex={lngIndex} title="История" />,
    },
  ];
  return (
    <>
      <Tabs onChange={onChange} type="card" items={items} />
    </>
  );
}

export default Research;
