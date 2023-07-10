import { InputNumber, Modal } from "antd";
import BackgroundButton from "../../components/buttons/backgroundButton";
const ModalLapsed = (props) => {
  const { isOpen, handleCancel } = props;
  return (
    <>
      <Modal
        open={isOpen}
        footer={null}
        centered
        width="43.75rem"
        onCancel={handleCancel}
      >
        <div className="row g-0  px-5 py-3 pb-4 d-flex justify-content-center align-items-center">
          <div className="text-center mb-4 h2-bold-size18-weight700 ">
            Create Donor Lapsed Group
          </div>
          <div className="col-4 d-flex align-items-center justify-content-center h5-bold-size13 ">
            Donor Lapsed Group
          </div>
          <div className="col-8 d-flex align-items-center justify-content-center px-3">
            <InputNumber className="me-2 inpNumber" style={{ width: "50%" }} />
            <div
              style={{
                width: "3%",
                height: "0.063rem",
                borderTop: "0.125rem solid #CED0D5",
              }}
            ></div>
            <InputNumber className="ms-2 inpNumber" style={{ width: "50%" }} />
            <div className="ms-2 h5-bold-size13-grey">days</div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <BackgroundButton tittle="Submit" width="20rem" height="2.8rem" />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalLapsed;
