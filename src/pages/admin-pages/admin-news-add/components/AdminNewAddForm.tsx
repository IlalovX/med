import { Form, FormProps, RadioChangeEvent } from "antd";

import NewForm from "../../../../components/new-form/NewForm";
import { useRef, useState } from "react";
import { LANGUAGES } from "../../../../constans/data";
import { useAddNew } from "../services/mutations";

function AdminNewAddForm({ lngIndex }: { lngIndex: string }) {
  const [form] = Form.useForm();
  const [radioValue, setRadioValue] = useState<number>(1);
  const [imageUrl, setImageUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const addNew = useAddNew();
  const onChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value);
  };

  const onFinish: FormProps["onFinish"] = (values) => {
    addNew.mutateAsync({
      description: values.description,
      flags: [radioValue],
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
    <NewForm
      text="Новости"
      onFinish={onFinish}
      form={form}
      onChange={onChange}
      radioValue={radioValue}
      setImageUrl={setImageUrl}
      fileInputRef={fileInputRef}
    />
  );
}

export default AdminNewAddForm;
