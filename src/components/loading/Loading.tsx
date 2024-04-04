import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Modal } from "antd";
import { useState } from "react";

function Loading() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  console.log(isModalOpen);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal onOk={handleOk} onCancel={handleCancel}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      </Modal>
    </div>
  );
}

export default Loading;
