import { Form, FormProps, Input, Tabs, TabsProps } from "antd";
import SubmitButton from "../../../components/submit-button/SubmitButton";
import { useState } from "react";
import { useUploadImage } from "../../../services/mutations";
import { getLaboratoryRoom } from "./services/queries";
import { useLaboratory } from "./services/mutations";

type FieldType = {
  title: string;
};

function LaboratoryRoomForm() {
  const [form] = Form.useForm();
  const formData = new FormData();
  const uploadImage = useUploadImage();
  const [imageUrl, setImageUrl] = useState<string>("");
  const laboratory = useLaboratory();
  const { data } = getLaboratoryRoom();

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      formData.append("file", event.target.files?.[0]);
      uploadImage
        .mutateAsync(formData)
        .then((res: any) => setImageUrl(res.data));
    }
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    laboratory.mutateAsync({
      image: imageUrl,
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
        Об институте
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

          <Form.Item
            label="Upload"
            rules={[
              {
                required: true,
                message: `Пожалуйста заполните поля "Upload"`,
              },
            ]}
          >
            <input type="file" onChange={onFileChange} />
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

function LaboratoryRoom() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Русский",
      children: <LaboratoryRoomForm />,
    },
    {
      key: "2",
      label: "Каракалпаксикий",
      children: <LaboratoryRoomForm />,
    },
    {
      key: "3",
      label: "Английский",
      children: <LaboratoryRoomForm />,
    },
    {
      key: "4",
      label: "Узбекский",
      children: <LaboratoryRoomForm />,
    },
  ];
  return <Tabs type="card" items={items} />;
}

export default LaboratoryRoom;
