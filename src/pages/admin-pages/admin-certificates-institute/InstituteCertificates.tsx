import { Form, FormProps, Input, Tabs, TabsProps } from "antd";
import SubmitButton from "../../../components/submit-button/SubmitButton";
import { useState } from "react";
import { useUploadImage } from "../../../services/mutations";
import { useCertificate } from "./services/mutations";

type FieldType = {
  title: string;
};

function InstituteCertificatesForm() {
  const [form] = Form.useForm();
  const formData = new FormData();
  const uploadImage = useUploadImage();
  const [imageUrl, setImageUrl] = useState<string>("");
  const certificate = useCertificate();

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      formData.append("file", event.target.files?.[0]);
      uploadImage
        .mutateAsync(formData)
        .then((res: any) => setImageUrl(res.data));
    }
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    certificate
      .mutateAsync({
        image: imageUrl,
        title: values.title,
      })
      .then(() => form.resetFields());
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <h1 className="text-4xl text-white rounded-t-lg bg-almost-blue py-2 px-5">
        Институтские лицензии и свидетельства об аккредитации
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

function InstituteCertificates() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Русский",
      children: <InstituteCertificatesForm />,
    },
    {
      key: "2",
      label: "Каракалпаксикий",
      children: <InstituteCertificatesForm />,
    },
    {
      key: "3",
      label: "Английский",
      children: <InstituteCertificatesForm />,
    },
    {
      key: "4",
      label: "Узбекский",
      children: <InstituteCertificatesForm />,
    },
  ];
  return <Tabs type="card" items={items} />;
}

export default InstituteCertificates;
