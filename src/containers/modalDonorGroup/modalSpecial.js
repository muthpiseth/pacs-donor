import { Input, Modal } from "antd";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import BackgroundButton from "../../components/buttons/backgroundButton";
import SearchType from "../../components/searchType/searchType";
import "../../styles/modalDonor/modalDonor.css";
const { TextArea } = Input;
const ModalSpecial = (props) => {
  const { isOpen, handleCancel } = props;

  return (
    <>
      <Modal
        open={isOpen}
        centered
        width="46.25rem"
        footer={null}
        onCancel={handleCancel}
      >
        <div className=" px-5 py-3">
          <div className="text-center mb-4 h2-bold-size18-weight700">
            Create Special Donor Group
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-3 h4-bold-size15 ">Group Name</div>
            <div className="col-9">
              <Input style={{ width: "100%" }} className="txtInput" />
            </div>
          </div>
          <div className="row mt-4 d-flex align-items-center">
            <div className="col-3">
              <span className="h4-bold-size17-weight700">Select Donors</span>
            </div>
            <div className="col-9">
              <div
                style={{
                  width: "100%",
                  height: "0.063rem",
                  borderTop: "0.125rem solid #CED0D5",
                }}
              ></div>
            </div>
          </div>
          {/* id-donor */}
          <div className="id-donor mt-2">
            <div className="p-1  sub-idDonor">
              <small>D2244848</small>
              <div className="ms-3 mb-2 icon-close">
                <AiOutlineClose />
              </div>
            </div>
            <div className="p-1 px-3 sub-idDonor">
              <small>D2244848</small>
              <div className="ms-3 mb-2 icon-close">
                <AiOutlineClose />
              </div>
            </div>
            <div className="p-1 px-3 sub-idDonor">
              <small>D2244848</small>
              <div className="ms-3 mb-2 icon-close">
                <AiOutlineClose />
              </div>
            </div>
            <div className="p-1 px-3 sub-idDonor">
              <small>D2244848</small>
              <div className="ms-3 mb-2 icon-close">
                <AiOutlineClose />
              </div>
            </div>
          </div>
          {/* input or choose id-donor */}
          <div className="row mt-4">
            <div className="col-12">
              <div
                className="p-2"
                style={{
                  border: " 0.125rem solid #152C5B1A",
                  borderTopRightRadius: "0.625rem",
                  borderTopLeftRadius: "0.625rem",
                }}
              >
                <SearchType />
              </div>
              <div className="textBorder">
                <TextArea
                  style={{ resize: "none" }}
                  rows="3"
                  columns="3"
                  placeholder="Input Donor ID to upload"
                  className="ant-textArea"
                />
              </div>
              <div className=" d-flex justify-content-end p-2 btn-add">
                <BackgroundButton
                  tittle="Add"
                  width="5.8rem"
                  height="1.8rem"
                  bgColor="white"
                  icon={<AiOutlinePlus />}
                  border="0.125rem solid #152C5B1A"
                  txtColor="#152c5b"
                  borderRadius="0.625rem"
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <BackgroundButton tittle="Submit" width="20rem" height="2.8rem" />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalSpecial;
