import { InputNumber, Modal } from "antd";
import BackgroundButton from "../../components/buttons/backgroundButton";
import "../../styles/modalDonor/modalDonor.css";
const ModalAge = (props) => {
  const { isOpen, handleCancel } = props;

  const handleSubmit = () => {
    alert("hello");
  };
  return (
    <>
      <Modal
        open={isOpen}
        footer={null}
        width="43.75rem"
        centered
        onCancel={handleCancel}
      >
        <div className="row g-0 px-5 py-3">
          <div className="text-center mb-4 h2-bold-size18-weight700 ">
            Create Donor Age Group
          </div>
          <div className="col-4 d-flex align-items-center h4-bold-size15 px-2">
            Donor Age Range
          </div>
          <div className="col-8 d-flex justify-content-center align-items-center">
            <InputNumber className="me-2 inpNumber" style={{ width: "100%" }} />
            <div
              style={{
                width: "7%",
                height: "0.063rem",
                borderTop: "0.125rem solid #CED0D5",
              }}
            ></div>
            <InputNumber className="ms-2 inpNumber" style={{ width: "100%" }} />
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <BackgroundButton
              tittle="Submit"
              width="20rem"
              height="2.8rem"
              onClickSubmit={handleSubmit}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalAge;
