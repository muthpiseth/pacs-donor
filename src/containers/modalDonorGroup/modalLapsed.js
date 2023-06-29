import { Button, InputNumber, Modal } from "antd";
import { useState } from "react";
import BackgroundButton from "../../components/buttons/backgroundButton";
const ModalLapsed = (props) => {
  const { isOpen } = props;
  return (
    <>
      <Modal open={isOpen} footer={null} width="37.5rem">
        <div className="row g-0 p-4 d-flex justify-content-center align-items-center">
          <div className="text-center mb-3">
            <h4>Create Donor Lapsed Group</h4>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-center">
            <label>Donor Lapsed Group</label>
          </div>
          <div className="col-8  d-flex align-items-center justify-content-center">
            <InputNumber className="me-2" />
            <div
              style={{
                width: "3%",
                height: "0.063rem",
                borderTop: "0.125rem solid #CED0D5",
              }}
            ></div>
            <InputNumber className="ms-2" />
            <div className="ms-2">days</div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <BackgroundButton tittle="Submit" />
        </div>
      </Modal>
    </>
  );
};
export default ModalLapsed;
