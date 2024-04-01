import { Form, FormProps, RadioChangeEvent } from "antd";

import NewForm from "../../../components/new-form/NewForm";
// import { useAddNews } from "../services/mutations";
import { useState } from "react";
import { LANGUAGES } from "../../../constans/data";
import { useMutation } from "@tanstack/react-query";
import { $host } from "../../../services/requestServices";

function AdminNewAddForm({ lngIndex }: { lngIndex: string }) {
  const [form] = Form.useForm();
  const [radioValue, setRadioValue] = useState<number>(1);
  const [imageUrl, setImageUrl] = useState<string>("");

  const onChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value);
  };

  const mutation = useMutation<any>({
    mutationFn: (data: any) => {
      return $host.post("/api/v1/news", data);
    },
  });

  const onFinish: FormProps["onFinish"] = (values) => {
    mutation.mutateAsync({
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
