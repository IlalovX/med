import type { RadioChangeEvent } from "antd";
import { useRef, useState } from "react";
import { Form, FormProps } from "antd";
import NewForm from "../../../../components/new-form/NewForm";
import { LANGUAGES } from "../../../../constans/data";
import { useAddAdvert } from "../services/mutations";

function AdminAdvertAddForm({ lngIndex }: { lngIndex: string }) {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [radioValue, setRadioValue] = useState(1);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const addAdvert = useAddAdvert();

  const onChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value);
  };

  const onFinish: FormProps["onFinish"] = (values) => {
    addAdvert.mutateAsync({
      description: values.description,
      flags: [radioValue.toString()],
      header: values.header,
      language: LANGUAGES[+lngIndex].abbr,
      photo: imageUrl,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    form.resetFields();
    setImageUrl("");
  };
  return (
    <div className="shadow-lg  w-full rounded-lg">
      <div className=" bg-white rounded-b-lg">
        <NewForm
          text="Обьявление"
          onFinish={onFinish}
          form={form}
          onChange={onChange}
          radioValue={radioValue}
          setImageUrl={setImageUrl}
          fileInputRef={fileInputRef}
        />
      </div>
    </div>
  );
}

export default AdminAdvertAddForm;
