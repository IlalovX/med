import { useState } from "react";
import { DatePickerProps, Form, FormProps } from "antd";
import { useAddUser } from "./services/mutations";
import UserForm from "../../../components/user-form/UserForm";

function AdminUsersAdd() {
  const addUser = useAddUser();
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
    addUser.mutateAsync({
      address: values.address,
      birthDate: dob,
      birthPlace: values.pob,
      city: values.city,
      degree: values.degree,
      email: values.email,
      endDate: endEdu,
      firstName: values.firstname,
      lastName: values.lastname,
      phone: values.phone,
      photo: imageUrl,
      startDate: startEdu,
      university: values.university,
    });
    form.resetFields();
  };
  return (
    <UserForm
      form={form}
      onFinish={onFinish}
      onChangeEndEduPicker={onChangeEndEduPicker}
      onChangeStartEduPicker={onChangeStartEduPicker}
      onChangeDobPicker={onChangeDobPicker}
      imageUrl={imageUrl}
      setImageUrl={setImageUrl}
    />
  );
}

export default AdminUsersAdd;
