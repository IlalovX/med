import { Form, FormProps, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import SubmitButton from "../../components/submit-button/SubmitButton";

function SampleFirst({ lngIndex, title }: { lngIndex: string; title: string }) {
  console.log(lngIndex);

  const [form] = Form.useForm();
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("Change:", e.target.value);
  };
  type FieldType = {
    title?: string;
    desc?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
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
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Info"
            name="desc"
            rules={[
              {
                required: true,
                message: `Пожалуйста заполните поля "Info"`,
              },
            ]}
          >
            <TextArea
              showCount
              maxLength={100}
              onChange={onChange}
              placeholder="disable resize"
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

export default SampleFirst;
