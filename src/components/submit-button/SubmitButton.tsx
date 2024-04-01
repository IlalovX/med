import { Button, FormInstance, Form } from "antd";
import { useEffect, useState } from "react";

interface SubmitButtonProps {
  form: FormInstance;
  w: string;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  children,
  w,
}) => {
  const [submittable, setSubmittable] = useState<boolean>(false);

  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button
      type="primary"
      htmlType="submit"
      disabled={!submittable}
      className={`${w} font-bold mt-10  text-center bg-almost-blue text-white  rounded-md text-xl sm:text-2xl  h-10 hover:opacity-60`}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
