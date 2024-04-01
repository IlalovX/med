import { DatePicker, Form, Input, Upload, message } from "antd";
import SubmitButton from "../submit-button/SubmitButton";
import { useState } from "react";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import type { GetProp, UploadProps } from "antd";

export interface FieldType {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  pob: string;
  city: string;
  university: string;
  degree: string;
}

function UserForm({
  form,
  onFinish,
  onChangeEndEduPicker,
  onChangeStartEduPicker,
  onChangeDobPicker,
}: {
  form: any;
  onFinish: any;
  onChangeEndEduPicker: any;
  onChangeStartEduPicker: any;
  onChangeDobPicker: any;
}) {
  type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
  const [imageUrl, setImageUrl] = useState<string>();
  const [loading, setLoading] = useState(false);
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
  return (
    <div className="shadow-lg  w-full ">
      <h1 className="text-white text-3xl font-bold bg-almost-blue py-2 px-5 rounded-t-lg">
        Personal Details
      </h1>
      <Form
        form={form}
        className="bg-white rounded-b-lg grid grid-cols-2 gap-10 p-5"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item<FieldType>
          label="First Name"
          name="firstname"
          rules={[{ required: true }]}
        >
          <Input placeholder="Maria" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Last Name"
          name="lastname"
          rules={[{ required: true }]}
        >
          <Input placeholder="Historia" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true }]}
        >
          <Input placeholder="Historia@mail.com" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Phone"
          name="phone"
          rules={[{ required: true }]}
        >
          <Input placeholder="+1234567890" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Adderess"
          name="address"
          rules={[{ required: true }]}
        >
          <Input.TextArea className="!resize-none" rows={5} />
        </Form.Item>
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true }]}
        >
          <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
        <Form.Item label="Date of Birth" rules={[{ required: true }]}>
          <DatePicker onChange={onChangeDobPicker} className="!w-full " />
        </Form.Item>
        <Form.Item<FieldType>
          label="Place of Birth"
          name="pob"
          rules={[{ required: true }]}
        >
          <Input placeholder="Jakarta, Indonesia" />
        </Form.Item>

        <Form.Item<FieldType>
          label="University"
          name="university"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Degree"
          name="degree"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Start and End Date" rules={[{ required: true }]}>
          <div className="flex justify-between !gap-5">
            <DatePicker onChange={onChangeStartEduPicker} className="w-full" />
            <DatePicker onChange={onChangeEndEduPicker} className="w-full" />
          </div>
        </Form.Item>
        <Form.Item<FieldType>
          label="City"
          name="city"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item />
        <Form.Item className="text-end">
          <SubmitButton form={form} w="inline">
            Submit
          </SubmitButton>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UserForm;
