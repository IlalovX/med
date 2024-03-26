import { Button, Form, FormProps, Input, Upload } from "antd";
import styles from "./add-news.module.scss";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
function AddNews() {
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
  return (
    <div className={styles.add_news}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="Название новости" name="title">
          <Input />
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
        <Form.Item label="Address" name="address">
          <TextArea style={{ height: 150, resize: "none" }} />
        </Form.Item>
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

export default AddNews;
