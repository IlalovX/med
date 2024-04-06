import { Form, FormProps, Input, Tabs, TabsProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import SubmitButton from "../../../components/submit-button/SubmitButton";
import { useStatute } from "./services/mutation";
import { getStatute } from "./services/queries";

type FieldType = {
  title: string;
  text: string;
};

function InstituteStatuteForm() {
  const [form] = Form.useForm();

  const statute = useStatute();
  const { data } = getStatute();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    statute.mutateAsync({
      title: values.title,
      text: values.text,
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
        Устав института
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
            <Input defaultValue={data?.title} />
          </Form.Item>
          <Form.Item<FieldType>
            label="Info"
            name="text"
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
              defaultValue={data?.text}
              style={{ height: 120, resize: "none" }}
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

function InstituteStatute() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Русский",
      children: <InstituteStatuteForm />,
    },
    {
      key: "2",
      label: "Каракалпаксикий",
      children: <InstituteStatuteForm />,
    },
    {
      key: "3",
      label: "Английский",
      children: <InstituteStatuteForm />,
    },
    {
      key: "4",
      label: "Узбекский",
      children: <InstituteStatuteForm />,
    },
  ];
  return <Tabs type="card" items={items} />;
}

export default InstituteStatute;
