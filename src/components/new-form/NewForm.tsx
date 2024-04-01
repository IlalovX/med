import SubmitButton from "../../components/submit-button/SubmitButton";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import type { GetProp, RadioChangeEvent, UploadProps } from "antd";
import { useState } from "react";
import { Form, Input, Radio, Upload, message } from "antd";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

type FieldType = {
  header: string;
  description: string;
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

function NewForm({ form, onFinish }: { form: any; onFinish: any }) {
  const [imageUrl, setImageUrl] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
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
    <div className="shadow-lg  w-full rounded-lg">
      <h1 className="text-white text-3xl font-bold bg-almost-blue py-2 px-5 rounded-t-lg rounded-t-lg">
        Новости
      </h1>
      <div className=" bg-white rounded-b-lg">
        <Form
          form={form}
          className="bg-white rounded-b-lg  gap-10 p-5"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item<FieldType> label="Заголовок" name="title">
            <Input placeholder="Lorem ipsum dolor sit amet" />
          </Form.Item>

          <Form.Item<FieldType> label="Описание" name="desc">
            <Input.TextArea className="!resize-none" rows={5} />
          </Form.Item>
          <Form.Item
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              name="avatar"
              listType="picture-card"
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

          <Form.Item />
          <Form.Item>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Новости института</Radio>
              <Radio value={2}>Новости института</Radio>
              <Radio value={3}>Новости института</Radio>
              <Radio value={4}>Новости института</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item className="text-end">
            <SubmitButton form={form} w="inline">
              Отправить
            </SubmitButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default NewForm;
