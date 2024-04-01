import { Tabs, TabsProps } from "antd";
import SampleFirst from "../../../components/sample-first/SampleFirst";
import { useState } from "react";
function Qualification() {
  const [lngIndex, setLngIndex] = useState("1");

  const onChange = (key: string) => {
    setLngIndex(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Русский",
      children: <SampleFirst lngIndex={lngIndex} title="Классификация" />,
    },
    {
      key: "2",
      label: "Каракалпаксикий",
      children: <SampleFirst lngIndex={lngIndex} title="Классификация" />,
    },
    {
      key: "3",
      label: "Английский",
      children: <SampleFirst lngIndex={lngIndex} title="Классификация" />,
    },
    {
      key: "4",
      label: "Узбекский",
      children: <SampleFirst lngIndex={lngIndex} title="Классификация" />,
    },
  ];

  return (
    <>
      <Tabs onChange={onChange} type="card" items={items} />
    </>
  );
}

export default Qualification;
