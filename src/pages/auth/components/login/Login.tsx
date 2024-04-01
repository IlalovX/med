import { NavLink } from "react-router-dom";
import { Form, Input } from "antd";
import SubmitButton from "../../../../components/submit-button/SubmitButton";
import BgAuth from "../../../../assets/images/bgAuth.png";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
};

function Login() {
  const [form] = Form.useForm();
  return (
    <div className="flex items-center justify-center sm:grid sm:grid-cols-[60%_40%]">
      <div className="flex items-center justify-center p-5">
        <Form
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          className="flex flex-col justify-between"
        >
          <h1 className="text-2xl sm:text-4xl mb-5 sm:mb-10 text-center sm:text-start">
            Вход
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
              label="Пароль"
              name="password"
              rules={[
                {
                  required: true,
                  message: `Пожалуйста заполните поля "Пароль"`,
                },
              ]}
            >
              <Input.Password className="text-xl sm:text-2xl" />
            </Form.Item>
          </div>
          <Form.Item>
            <div className="flex justify-between items-center space-x-5">
              <NavLink
                to="/auth/registration"
                className="w-full bg-almost-blue mt-10 text-white font-bold  text-center  rounded-md text-xl  sm:text-2xl h-10 hover:opacity-30"
              >
                Регистрация
              </NavLink>
              <SubmitButton form={form} w="w-full">
                Войти
              </SubmitButton>
            </div>
          </Form.Item>
        </Form>
      </div>
      <img src={BgAuth} className="sm:w-full sm:min-h-screen hidden sm:block" />
    </div>
  );
}

export default Login;
