import { InputNumber, Modal } from "antd";
import BackgroundButton from "../../components/buttons/backgroundButton";
const ModalConfigure = (props) => {
  const { isOpen, tittleConfigure, handleCancel } = props;
  return (
    <Modal
      open={isOpen}
      centered
      width="43.75rem"
      footer={null}
      onCancel={handleCancel}
    >
      <div className=" px-5 py-3">
        <div className="text-center mb-4 h2-bold-size18-weight700">
          {tittleConfigure}
        </div>
        <div className=" d-flex align-items-center justify-content-center">
          <InputNumber className="me-2 inpNumber" />
          <div
            style={{
              width: "2%",
              height: "0.063rem",
              borderTop: "0.125rem solid #CED0D5",
            }}
          ></div>
          <InputNumber className="ms-2 inpNumber" />
          <div className="px-2 ">
            <span className="h5-bold-size13-grey">
              Campaign attended within
            </span>
          </div>
          <InputNumber className="ms-2 inpNumber" />
          <span className="ms-2 h5-bold-size13-grey">days</span>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <BackgroundButton tittle="Submit" width="20rem" height="2.8rem" />
        </div>
      </div>
    </Modal>
  );
};
export default ModalConfigure;
