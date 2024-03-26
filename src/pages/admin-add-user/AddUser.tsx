import TextArea from "antd/es/input/TextArea";
import styles from "./add-user.module.scss";

import {
  Button,
  Form,
  type FormProps,
  Input,
  Upload,
  DatePicker,
  DatePickerProps,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { RangePickerProps } from "antd/es/date-picker";

const { RangePicker } = DatePicker;

function AddUser() {
  const onFinish: FormProps["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e: any) => {
    console.log(e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const onChangeRange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onOk = (
    value: DatePickerProps["value"] | RangePickerProps["value"]
  ) => {
    console.log("onOk: ", value);
  };

  return (
    <div className={styles.add_user}>
      <h1>Add New Teacher</h1>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <section className={styles.detail}>
          <h2>Personal Details</h2>
          <main>
            <Form.Item label="First Name" name="firstName">
              <Input />
            </Form.Item>
            <Form.Item label="Last Name" name="lastName">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input />
            </Form.Item>
            <Form.Item label="Address" name="address">
              <TextArea style={{ height: 120, resize: "none" }} />
            </Form.Item>
            <Form.Item
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload action="/upload.do" listType="picture-card">
                <button style={{ border: 0, background: "none" }} type="button">
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </button>
              </Upload>
            </Form.Item>
            <Form.Item label="DatePicker">
              <DatePicker onChange={onChange} />
            </Form.Item>
          </main>
        </section>
        <section className={styles.personal}>
          <h2>Education</h2>
          <main>
            <Form.Item label="University" name="university">
              <Input />
            </Form.Item>
            <Form.Item label="Degree" name="degree">
              <Input />
            </Form.Item>
            <Form.Item label="Start & End Date *">
              <RangePicker onChange={onChangeRange} onOk={onOk} />
            </Form.Item>
            <Form.Item label="City" name="city">
              <Input />
            </Form.Item>
          </main>
        </section>
        <div className={styles.btns_container}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default AddUser;
