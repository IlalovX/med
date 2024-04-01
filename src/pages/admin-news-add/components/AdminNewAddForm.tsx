import { Form, FormProps } from "antd";

import { useAddNews } from "../services/mutation";
import NewForm from "../../../components/new-form/NewForm";

const onFinish: FormProps["onFinish"] = (values) => {
  console.log("Success:", values);
  useAddNews().mutateAsync({
    description: values.description,
    flags: ["ins"],
    header: values.header,
    language: "ru",
    photo: "string",
  });
};

function AdminNewAddForm() {
  const [form] = Form.useForm();

  return <NewForm onFinish={onFinish} form={form} />;
}

export default AdminNewAddForm;
