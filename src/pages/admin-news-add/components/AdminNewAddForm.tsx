import { Form, FormProps, RadioChangeEvent } from "antd";

import NewForm from "../../../components/new-form/NewForm";
import { useState } from "react";
import { LANGUAGES } from "../../../constans/data";
import { useAddNew } from "../services/mutations";

function AdminNewAddForm({ lngIndex }: { lngIndex: string }) {
  const [form] = Form.useForm();
  const [radioValue, setRadioValue] = useState<number>(1);
  const [imageUrl, setImageUrl] = useState<string>("");
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
  };

  return (
    <NewForm
      text="Новости"
      onFinish={onFinish}
      form={form}
      onChange={onChange}
      radioValue={radioValue}
      setImageUrl={setImageUrl}
    />
  );
}

export default AdminNewAddForm;
