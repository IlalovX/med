import { DatePickerProps, Form, FormProps } from "antd";
import { useState } from "react";
import UserForm from "../../components/user-form/UserForm";
import { usePutUser } from "./services/mutations";

function AdminUsersEdit() {
  const [form] = Form.useForm();
  const [dob, setDob] = useState<string | string[]>("");
  const [startEdu, setStartEdu] = useState<string | string[]>("");
  const [endEdu, setEndEdu] = useState<string | string[]>("");
  const [imageUrl, setImageUrl] = useState("");

  const onChangeDobPicker: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date);
    setDob(dateString);
  };

  const onChangeStartEduPicker: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    console.log(date);
    setStartEdu(dateString);
  };
  const onChangeEndEduPicker: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    console.log(date);

    setEndEdu(dateString);
  };

  const onFinish: FormProps["onFinish"] = (values) => {
    usePutUser().mutateAsync({
      values,
      dob: dob,
      startDate: startEdu,
      endDate: endEdu,
    });
  };

  return (
    <div>
      <h1>Change User informations</h1>
      <UserForm
        form={form}
        onFinish={onFinish}
        onChangeEndEduPicker={onChangeEndEduPicker}
        onChangeStartEduPicker={onChangeStartEduPicker}
        onChangeDobPicker={onChangeDobPicker}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
      />
    </div>
  );
}

export default AdminUsersEdit;
