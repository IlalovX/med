import { Form, FormProps, Input, Tabs, TabsProps, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import SubmitButton from "../../../components/submit-button/SubmitButton";
import styles from "../admin-faculty.module.scss";
import { InboxOutlined } from "@ant-design/icons";

function AddForm() {
  const [form] = Form.useForm();
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("Change:", e.target.value);
  };
  type FieldType = {
    title?: string;
    desc?: string;
    files?: any;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      console.log(e);

      return e;
    }
    return e?.fileList;
  };

  return (
    <div>
      <h1 className="text-4xl text-white rounded-t-lg bg-almost-blue py-2 px-5">
        Классификация
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
          <Form.Item label="Image">
            <Form.Item
              name="dragger"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name="files" action="https://upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            </Form.Item>
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

function History() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Русский",
      children: <AddForm />,
    },
    {
      key: "2",
      label: "Каракалпаксикий",
      children: <AddForm />,
    },
    {
      key: "3",
      label: "Английский",
      children: <AddForm />,
    },
    {
      key: "4",
      label: "Узбекский",
      children: <AddForm />,
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div className={styles.admin_adverts_add}>
      <Tabs onChange={onChange} type="card" items={items} />
    </div>
  );
}

export default History;
