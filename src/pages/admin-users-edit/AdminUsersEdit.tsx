import { DatePickerProps, Form, FormProps, message } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import type { GetProp, UploadProps } from "antd";
import UserForm from "../../components/user-form/UserForm";
import { usePutUser } from "./services/mutations";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    console.log(e);

    return e;
  }
  return e?.fileList;
};

function AdminUsersEdit({ lngIndex }: { lngIndex: string }) {
  console.log(lngIndex);

  const [form] = Form.useForm();
  const [dob, setDob] = useState<string | string[]>("");
  const [startEdu, setStartEdu] = useState<string | string[]>("");
  const [endEdu, setEndEdu] = useState<string | string[]>("");
  //   const [img, setImg] = useState("");
  const [imageUrl, setImageUrl] = useState<string>();
  const [loading, setLoading] = useState(false);

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

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
        uploadButton={uploadButton}
        handleChange={handleChange}
        normFile={normFile}
        beforeUpload={beforeUpload}
        imageUrl={imageUrl}
      />
    </div>
  );
}

export default AdminUsersEdit;
