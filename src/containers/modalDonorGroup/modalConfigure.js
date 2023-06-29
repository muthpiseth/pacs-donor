import { InputNumber, Modal } from "antd";
import BackgroundButton from "../../components/buttons/backgroundButton";
const ModalConfigure = (props) => {
  const { isOpen, tittleConfigure } = props;
  return (
    <Modal open={isOpen} width="37.5rem" footer={null}>
      <div className="p-4">
        <div className="text-center mb-4">
          <h5>{tittleConfigure}</h5>
        </div>
        <div className=" d-flex align-items-center justify-content-center">
          <InputNumber className="me-2" />
          <div
            style={{
              width: "2%",
              height: "0.063rem",
              borderTop: "0.125rem solid #CED0D5",
            }}
          ></div>
          <InputNumber className="ms-2" />
          <div className="px-2 ">
            <span style={{ fontSize: "0.75rem" }}>
              {" "}
              Campaign attended within
            </span>
          </div>
          <InputNumber className="ms-2" />
          <span className="ms-2">days</span>
        </div>
        <div className="d-flex justify-content-center align-items-center  mt-4">
          <BackgroundButton tittle="Submit" />
        </div>
      </div>
    </Modal>
  );
};
export default ModalConfigure;
