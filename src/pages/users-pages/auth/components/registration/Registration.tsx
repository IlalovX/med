import { Form, Input } from "antd";

import BgAuth from "../../../../../assets/images/bgAuth.png";
import SubmitButton from "../../../../../components/submit-button/SubmitButton";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  email?: string;
};

function Registration() {
  const [form] = Form.useForm();
  return (
    <div className="flex items-center justify-center sm:grid sm:grid-cols-[60%_40%]">
      <div className="flex items-center justify-center p-5">
        <Form
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="flex flex-col justify-between "
          labelCol={{ flex: "110px" }}
        >
          <h1 className="text-2xl sm:text-4xl mb-5 sm:mb-10 text-center sm:text-start">
            Регистрация
          </h1>
          <div className="flex flex-col sm:flex-row gap-5 mb-5 sm:mb-10">
            <Form.Item<FieldType>
              label="Логин"
              name="username"
              rules={[
                {
                  required: true,
                  message: `Пожалуйста заполните поля "Логин"`,
                },
              ]}
            >
              <Input className="text-xl sm:text-2xl" />
            </Form.Item>
            <Form.Item<FieldType>
              label="Почта"
              name="email"
              rules={[
                {
                  required: true,
                  message: `Пожалуйста заполните поля "Почта"`,
                },
              ]}
            >
              <Input className="text-xl sm:text-2xl" />
            </Form.Item>
          </div>

          <Form.Item<FieldType>
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: `Пожалуйста заполните поля "Пароль"`,
              },
            ]}
          >
            <Input.Password className="text-sm:text-2xl " />
          </Form.Item>

          <Form.Item>
            <SubmitButton form={form} w="w-full">
              Регистрация
            </SubmitButton>
          </Form.Item>
        </Form>
      </div>
      <img src={BgAuth} className="sm:w-full sm:min-h-screen hidden sm:block" />
    </div>
  );
}

export default Registration;
