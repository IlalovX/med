import { Form, FormProps, RadioChangeEvent } from "antd";

import NewForm from "../../../components/new-form/NewForm";
import { useState } from "react";
import { LANGUAGES } from "../../../constans/data";
import { useEditNew } from "../services/mutations";
import { useParams } from "react-router-dom";

function AdminNewEditForm({ lngIndex }: { lngIndex: string }) {
  const { id } = useParams();
  const [form] = Form.useForm();
  const editNew = useEditNew({ id: id as string});
  const [radioValue, setRadioValue] = useState<number>(1);
  const [imageUrl, setImageUrl] = useState<string>("");

  const onChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value);
  };

  const onFinish: FormProps["onFinish"] = (values) => {
    editNew.mutateAsync({
      description: values.description,
      flags: [radioValue],
      header: values.header,
      language: LANGUAGES[+lngIndex].abbr,
      photo: imageUrl,
    });
    form.resetFields();
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

export default AdminNewEditForm;
