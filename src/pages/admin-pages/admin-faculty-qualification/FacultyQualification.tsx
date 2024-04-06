import { Tabs, TabsProps } from "antd";
import { useState } from "react";

import { Form, FormProps, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import SubmitButton from "../../../components/submit-button/SubmitButton";
import { LANGUAGES } from "../../../constans/data";
import { useParams } from "react-router-dom";
import { getQualification } from "./services/queries";
import { useQualification } from "./services/mutations";
import stylse from "../admin-faculty/admin-faculty.module.scss";
function QualificationForm({
  lngIndex,
  title,
}: {
  lngIndex: string;
  title: string;
}) {
  const { id } = useParams();
  const [form] = Form.useForm();
  const { data } = getQualification();
  const qualification = useQualification();
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("Change:", e.target.value);
  };
  type FieldType = {
    title?: string;
    desc1?: string;
    desc2: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    qualification.mutateAsync({
      faculty: id?.toString(),
      firstDesc: values.desc1,
      language: LANGUAGES[+lngIndex].abbr,
      secondDesc: values.desc2,
      title: values.title,
    });
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <h1 className="text-4xl text-white rounded-t-lg bg-almost-blue py-2 px-5">
        {title}
      </h1>
      <div className="bg-white rounden-b-lg container mx-auto p-5 space-y-5">
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: `Пожалуйста заполните поля "Title"`,
              },
            ]}
          >
            <Input maxLength={1000} minLength={2} defaultValue={data?.title} />
          </Form.Item>
          <Form.Item<FieldType>
            label="Info2"
            name="desc1"
            rules={[
              {
                required: true,
                message: `Пожалуйста заполните поля "Info"`,
              },
            ]}
          >
            <TextArea
              showCount
              maxLength={1000}
              minLength={2}
              onChange={onChange}
              placeholder="disable resize"
              style={{ height: 120, resize: "none" }}
              defaultValue={data?.firstDesc}
            />
          </Form.Item>
          <Form.Item<FieldType>
            label="Info2"
            name="desc2"
            rules={[
              {
                required: true,
                message: `Пожалуйста заполните поля "Info"`,
              },
            ]}
          >
            <TextArea
              showCount
              maxLength={1000}
              minLength={2}
              onChange={onChange}
              placeholder="disable resize"
              style={{ height: 120, resize: "none" }}
              defaultValue={data?.secondDesc}
            />
          </Form.Item>
          <Form.Item className="text-end">
            <SubmitButton form={form} w="inline">
              Submit
            </SubmitButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

function Qualification() {
  const [lngIndex, setLngIndex] = useState("1");

  const onChange = (key: string) => {
    setLngIndex(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Русский",
      children: <QualificationForm lngIndex={lngIndex} title="Классификация" />,
    },
    {
      key: "2",
      label: "Каракалпаксикий",
      children: <QualificationForm lngIndex={lngIndex} title="Классификация" />,
    },
    {
      key: "3",
      label: "Английский",
      children: <QualificationForm lngIndex={lngIndex} title="Классификация" />,
    },
    {
      key: "4",
      label: "Узбекский",
      children: <QualificationForm lngIndex={lngIndex} title="Классификация" />,
    },
  ];

  return (
    <div className={stylse.faculty}>
      <Tabs onChange={onChange} type="card" items={items} />
    </div>
  );
}

export default Qualification;
