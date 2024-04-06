import { Form, FormProps, Input, InputNumber, Tabs, TabsProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import SubmitButton from "../../../components/submit-button/SubmitButton";
import { useState } from "react";
import { useUploadImage } from "../../../services/mutations";
import { useInstitute } from "./services/mutations";
import { getInstitute } from "./services/queries";

type FieldType = {
  faculties: number;
  image: string;
  info: string;
  learningProcess: number;
  professors: number;
  students: number;
  title: string;
};

function InformationForm() {
  const [form] = Form.useForm();
  const formData = new FormData();
  const uploadImage = useUploadImage();
  const institute = useInstitute();
  const [imageUrl, setImageUrl] = useState<string>("");
  const { data } = getInstitute();

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      formData.append("file", event.target.files?.[0]);
      uploadImage
        .mutateAsync(formData)
        .then((res: any) => setImageUrl(res.data));
    }
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    institute.mutateAsync({
      faculties: +values.faculties,
      image: imageUrl,
      info: values.info,
      learningProcess: +values.learningProcess,
      professors: +values.professors,
      students: +values.students,
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
            <Input defaultValue={data?.title} />
          </Form.Item>
          <Form.Item<FieldType>
            label="Info"
            name="info"
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
              defaultValue={data?.info}
              style={{ height: 120, resize: "none" }}
            />
          </Form.Item>
          <div className="grid grid-cols-4 gap-10">
            <Form.Item<FieldType>
              label="Студентов"
              name="students"
              rules={[
                {
                  required: true,
                  message: `Пожалуйста заполните поля "Студентов"`,
                },
              ]}
            >
              <InputNumber
                min={0}
                className="w-32"
                defaultValue={data?.students}
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="Учебных процесс"
              name="learningProcess"
              rules={[
                {
                  required: true,
                  message: `Пожалуйста заполните поля "Учебных процесс"`,
                },
              ]}
            >
              <InputNumber
                min={0}
                className="w-32"
                defaultValue={data?.learningProcess}
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="Профессоров"
              name="professors"
              rules={[
                {
                  required: true,
                  message: `Пожалуйста заполните поля "Профессоров"`,
                },
              ]}
            >
              <InputNumber
                min={0}
                className="w-32"
                defaultValue={data?.professors}
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="Факультетов"
              name="faculties"
              rules={[
                {
                  required: true,
                  message: `Пожалуйста заполните поля "Факультетов"`,
                },
              ]}
            >
              <InputNumber
                min={0}
                className="w-32"
                defaultValue={data?.faculties}
              />
            </Form.Item>
          </div>

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

function Information() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Русский",
      children: <InformationForm />,
    },
    {
      key: "2",
      label: "Каракалпаксикий",
      children: <InformationForm />,
    },
    {
      key: "3",
      label: "Английский",
      children: <InformationForm />,
    },
    {
      key: "4",
      label: "Узбекский",
      children: <InformationForm />,
    },
  ];
  return <Tabs type="card" items={items} />;
}

export default Information;
