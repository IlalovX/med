import { Form, FormProps, RadioChangeEvent } from "antd";

import NewForm from "../../../components/new-form/NewForm";
import { useState } from "react";
import { LANGUAGES } from "../../../constans/data";
import { useParams } from "react-router-dom";
import { useEditAdvert } from "../services/mutation";

function AdminAdvertEditForm({ lngIndex }: { lngIndex: string }) {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [radioValue, setRadioValue] = useState<number>(1);
  const [imageUrl, setImageUrl] = useState<string>("");
  const editAdvert = useEditAdvert({ id: id as string });
  const onChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value);
  };

  const onFinish: FormProps["onFinish"] = (values) => {
    editAdvert.mutateAsync({
      description: values.description,
      flags: [radioValue.toString()],
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

export default AdminAdvertEditForm;
