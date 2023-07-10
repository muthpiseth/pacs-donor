import { InputNumber, Modal } from "antd";
import BackgroundButton from "../../components/buttons/backgroundButton";
import { GrStatusGoodSmall } from "react-icons/gr";
const ModalDonation = (props) => {
  const { isOpen, handleCancel } = props;
  return (
    <>
      <Modal
        open={isOpen}
        centered
        width="43.75rem"
        onCancel={handleCancel}
        footer={null}
      >
        <div className=" px-5 py-3 ">
          <div className="text-center mb-4 h2-bold-size18-weight700 ">
            Edit Donation Donor{" "}
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <div className="text-h6 me-2 text-danger">
              <GrStatusGoodSmall className="statusIcon" />
            </div>
            <div className="d-flex align-items-center h5-bold-size13 me-4">
              High Activeness
            </div>
            <InputNumber className="ms-2 inpNumber" />
            <div className="px-2 h5-bold-size13-grey">donation within</div>
            <InputNumber className="ms-2 inpNumber" />
            <span className="ms-2 h5-bold-size13-grey">days</span>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <BackgroundButton tittle="Submit" width="20rem" height="2.8rem" />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalDonation;
