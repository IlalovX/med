import { Form, Input } from "antd";

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
  email?: string;
};

function Registration() {
  return (
    <div className="grid grid-cols-[60%_40%]">
      <div className="flex items-center justify-center">
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="flex flex-col justify-between "
        >
          <h1 className="text-4xl mb-10">Регистрация</h1>
          <div className="flex space-x-5 mb-10">
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
              <Input className="text-2xl" />
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
              <Input className="text-2xl" />
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
            <Input.Password className="text-2xl " />
          </Form.Item>

          <button
            type="submit"
            className=" w-full font-bold  text-center bg-almost-blue text-white  rounded-md text-2xl  h-10 hover:opacity-60 mt-14"
          >
            Регистрация
          </button>
        </Form>
      </div>
      <img src={BgAuth} className="w-full h-screen" />
    </div>
  );
}

export default Registration;
