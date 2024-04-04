import { Form, FormProps, Input } from "antd";
import SubmitButton from "../../../components/submit-button/SubmitButton";
import { useEditContacts } from "../services/mutaions";

function AdminEditForm() {
  const [form] = Form.useForm();
  const useContacts = useEditContacts();

  const onFinish: FormProps["onFinish"] = (values) => {
    useContacts.mutateAsync({
      address: values.address,
      email: values.email,
      phone: values.phone,
      language: "ru",
    });
    form.resetFields();
  };

  return (
    <div className="shadow-lg  w-full rounded-lg">
      <h1 className="text-white text-3xl font-bold bg-almost-blue py-2 px-5 rounded-t-lg rounded-t-lg">
        Contacts Details
      </h1>
      <div className=" bg-white rounded-b-lg">
        <Form
          form={form}
          className="bg-white rounded-b-lg  gap-10 p-5"
          layout="vertical"
          onFinish={onFinish}
        >
          <div className="grid grid-cols-2 gap-5">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: `Пожалуйста заполните поля "Email"`,
                },
              ]}
            >
              <Input placeholder="Lorem ipsum dolor sit amet" />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: `Пожалуйста заполните поля "Phone"`,
                },
              ]}
            >
              <Input placeholder="Lorem ipsum dolor sit amet" />
            </Form.Item>
          </div>
          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: `Пожалуйста заполните поля "Address"`,
              },
            ]}
          >
            <Input.TextArea
              className="w-full"
              style={{ resize: "none" }}
              rows={8}
            />
          </Form.Item>

          <Form.Item>
            <input type="file" />
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

export default AdminEditForm;
