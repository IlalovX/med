import { DatePickerProps, Form, FormProps } from "antd";
import { useState } from "react";
import { useAddUser } from "../services/mutations";
import UserForm from "../../../components/user-form/UserForm";

function AdminUserAddForm({ lngIndex }: { lngIndex: string }) {
  console.log(lngIndex);

  const [form] = Form.useForm();
  const addUser = useAddUser();
  const [dob, setDob] = useState<string | string[]>("");
  const [startEdu, setStartEdu] = useState<string | string[]>("");
  const [endEdu, setEndEdu] = useState<string | string[]>("");
  //   const [img, setImg] = useState("");

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
    addUser.mutateAsync({
      values,
      dob: dob,
      startDate: startEdu,
      endDate: endEdu,
    });
  };

  return (
    <UserForm
      form={form}
      onFinish={onFinish}
      onChangeEndEduPicker={onChangeEndEduPicker}
      onChangeStartEduPicker={onChangeStartEduPicker}
      onChangeDobPicker={onChangeDobPicker}
    />
  );
}

export default AdminUserAddForm;
