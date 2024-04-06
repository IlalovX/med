import SubmitButton from "../../components/submit-button/SubmitButton";
import { Form, Input, Radio } from "antd";
import { useUploadImage } from "../../services/mutations";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

export interface FieldType {
  header: string;
  description: string;
}

function NewForm({
  form,
  text,
  onFinish,
  onChange,
  radioValue,
  setImageUrl,
  fileInputRef,
}: {
  form: any;
  text: string;
  onFinish: any;
  onChange: any;
  radioValue: number;
  setImageUrl: any;
  fileInputRef: any;
}) {
  const uploadImage = useUploadImage();
  const formData = new FormData();

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      formData.append("file", event.target.files?.[0]);
      uploadImage
        .mutateAsync(formData)
        .then((res: any) => setImageUrl(res.data));
    }
  };
  const { t } = useTranslation();
  return (
    <div className="shadow-lg  w-full rounded-lg">
      <h1 className="text-white text-3xl font-bold bg-almost-blue py-2 px-5 rounded-t-lg rounded-t-lg">
        {text}
      </h1>
      <div className=" bg-white rounded-b-lg">
        <Form
          form={form}
          className="bg-white rounded-b-lg  gap-10 p-5"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item<FieldType>
            label="Заголовок"
            name="header"
            rules={[
              {
                required: true,
                message: `Пожалуйста заполните поля "Заголовок"`,
              },
            ]}
          >
            <Input placeholder="Lorem ipsum dolor sit amet" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Описание"
            name="description"
            rules={[
              {
                required: true,
                message: `Пожалуйста заполните поля "Описание"`,
              },
            ]}
          >
            <Input.TextArea className="!resize-none" rows={5} />
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
            <input type="file" onChange={onFileChange} ref={fileInputRef} />
          </Form.Item>

          <Form.Item>
            <Radio.Group onChange={onChange} value={radioValue}>
              <Radio value={1}>{t("home:institute")}</Radio>
              <Radio value={2}>{t("home:faculties")}</Radio>
              <Radio value={3}>{t("home:clinic")}</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item className="text-end">
            <SubmitButton form={form} w="inline">
              Отправить
            </SubmitButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default NewForm;
