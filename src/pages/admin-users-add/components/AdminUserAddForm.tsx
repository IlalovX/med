import { DatePickerProps, Form, FormProps } from "antd";
import { useState } from "react";
import UserForm from "../../../components/user-form/UserForm";
import { useAddUser } from "../services/mutations";

function AdminUserAddForm({ lngIndex }: { lngIndex: string }) {
  const addUser = useAddUser();
  const [form] = Form.useForm();
  const [dob, setDob] = useState<string | string[]>("");
  const [startEdu, setStartEdu] = useState<string | string[]>("");
  const [endEdu, setEndEdu] = useState<string | string[]>("");
  const [imageUrl, setImageUrl] = useState("");
  console.log(lngIndex, imageUrl);

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
    console.log(values);

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

export default AdminUserAddForm;
