import { InputNumber, Modal } from "antd";
import BackgroundButton from "../../components/buttons/backgroundButton";
const ModalLapsed = (props) => {
  const { isOpen, handleCancel } = props;
  return (
    <>
      <Modal
        open={isOpen}
        footer={null}
        width="37.5rem"
        onCancel={handleCancel}
      >
        <div className="row g-0 p-4 d-flex justify-content-center align-items-center">
          <div className="text-center mb-3 h2-bold-size20">
            Create Donor Lapsed Group
          </div>
          <div className="col-4 d-flex align-items-center justify-content-center h4-bold-size15-grey">
            Donor Lapsed Group
          </div>
          <div className="col-8  d-flex align-items-center justify-content-center">
            <InputNumber className="me-2 inputFont" />
            <div
              style={{
                width: "3%",
                height: "0.063rem",
                borderTop: "0.125rem solid #CED0D5",
              }}
            ></div>
            <InputNumber className="ms-2" />
            <div className="ms-2 h4-bold-size15-grey">days</div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <BackgroundButton tittle="Submit" width="20rem" height="2.8rem" />
        </div>
      </Modal>
    </>
  );
};
export default ModalLapsed;
