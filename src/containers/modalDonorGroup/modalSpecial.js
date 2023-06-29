import { Input, Modal } from "antd";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import BackgroundButton from "../../components/buttons/backgroundButton";
const { TextArea } = Input;
const ModalSpecial = (props) => {
  const { isOpen, handleCancel } = props;
  return (
    <>
      <Modal open={isOpen} width="43.75rem" footer={null} onCancel={handleCancel}>
        <div className="p-5">
          <div className="text-center mb-4 h2-bold-size20">
            Create Special Donor Group
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-3 h4-bold-size15-grey">
              Group Name
            </div>
            <div className="col-9">
              <Input style={{ width: "100%" }} />
            </div>
          </div>
          <div className="row mt-4 d-flex align-items-center">
            <div className="col-3">
              <span className="h4-bold-size16">
                Select Donors
              </span>
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
          <div className="row mt-4">
            <div className="col-12">
              <div
                className="p-2"
                style={{
                  border: "0.125rem solid #d9d9d9",
                  borderTopRightRadius: "0.625rem",
                  borderTopLeftRadius: "0.625rem",
                }}
              >
                <Input
                  prefix={<AiOutlineSearch />}
                  allowClear={true}
                  placeholder="input search text"
                  onSearch={(value) => console.log(value)}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="textBorder">
                <TextArea
                  style={{ resize: "none" }}
                  rows="6"
                  placeholder="Input Donor ID to upload"
                  className="ant-textArea"
                />
              </div>
              <div className=" d-flex justify-content-end p-3 btn-add">
                <BackgroundButton
                  tittle="Add"
                  width="5rem"
                  bgColor="white"
                  icon={<AiOutlinePlus />}
                  border="0.125rem solid #d9d9d9"
                  txtColor="#152c5b16"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalSpecial;
