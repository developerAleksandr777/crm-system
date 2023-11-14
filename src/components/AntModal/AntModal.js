import React, { useState } from "react";
import { Modal } from "antd";
import AntButton from "../AntButton/AntButton";
import AntAccordion from "../AntAccordion/AntAccordion";

const AntModal = ({ arrayGoodCategory, title }) => {
  const [visible, setVisible] = useState(false);

  const handleOpenModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <AntButton func={handleOpenModal} type="primary" title="Open Modal" />
      <Modal
        title={title}
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AntAccordion
          arrayGoodCategory={arrayGoodCategory}
          titleOfPanel="Filtered By Goods"
        />
      </Modal>
    </>
  );
};

export default AntModal;
