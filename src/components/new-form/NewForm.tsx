import SubmitButton from "../../components/submit-button/SubmitButton";
import { Form, Input, Radio } from "antd";
import { useUploadImage } from "../../services/mutations";
import { useTranslation } from "react-i18next";

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
}: {
  form: any;
  text: string;
  onFinish: any;
  onChange: any;
  radioValue: number;
  setImageUrl: any;
}) {
  const uploadImage = useUploadImage();
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const formData = new FormData();
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
          <Form.Item<FieldType> label="Заголовок" name="header">
            <Input placeholder="Lorem ipsum dolor sit amet" />
          </Form.Item>

          <Form.Item<FieldType> label="Описание" name="description">
            <Input.TextArea className="!resize-none" rows={5} />
          </Form.Item>
          <Form.Item label="Upload">
            <input type="file" onChange={onFileChange} />
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
