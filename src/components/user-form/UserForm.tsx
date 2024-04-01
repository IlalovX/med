import { DatePicker, Form, Input } from "antd";
import SubmitButton from "../submit-button/SubmitButton";
import { useUploadImage } from "../../services/mutations";

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
  setImageUrl,
  imageUrl,
}: {
  form: any;
  onFinish: any;
  onChangeEndEduPicker: any;
  onChangeStartEduPicker: any;
  onChangeDobPicker: any;
  setImageUrl: any;
  imageUrl: string;
}) {
  const uploadImage = useUploadImage();
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      uploadImage
        .mutateAsync(event.target.files?.[0])
        .then((res) => setImageUrl(res.data));
    }
  };

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
          rules={[{ required: true }]}
          className=" h-[250px]"
        >
          <input type="file" onChange={onFileChange} />
          {imageUrl && (
            <img src={imageUrl} className="w-[150px] h-[150px] mt-5" />
          )}
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
