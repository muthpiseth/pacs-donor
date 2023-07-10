import React, { useState } from "react";
import BackgroundButton from "../../components/buttons/backgroundButton";
import "../../styles/donorGroup/donorGroup.css";
import { BiEditAlt } from "react-icons/bi";
import { GrStatusGoodSmall } from "react-icons/gr";
import SwitchButton from "../../components/switchButton/switchButton";
import Configure from "./configure";
import ModalConfigure from "../../containers/modalDonorGroup/modalConfigure";
import ModalLapsed from "../../containers/modalDonorGroup/modalLapsed";
import ModalSpecial from "../../containers/modalDonorGroup/modalSpecial";
import ModalAge from "../../containers/modalDonorGroup/modalAge";
import { RiDeleteBin6Line } from "react-icons/ri";
import ModalDonation from "../../containers/modalDonorGroup/modalDonation";
const DonorGroup = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(show === false ? true : false);
  const [showConfigure, setShowConfigure] = useState(false);
  const handleShowConfigure = () =>
    setShowConfigure(showConfigure === false ? true : false);
  const [showLapsed, setShowLapsed] = useState(false);
  const handleShowLapsed = () =>
    setShowLapsed(showLapsed === false ? true : false);
  const [showSpecial, setShowSpecial] = useState(false);
  const handleShowSpecial = () =>
    setShowSpecial(showSpecial === false ? true : false);
  const [showDonation, SetShowDonation] = useState(false);
  const handleShowDonation = () =>
    SetShowDonation(showDonation === false ? true : false);
  const Members = [
    {
      id: "D1234599",
    },
    {
      id: "D1234599",
    },
    {
      id: "D1234599",
    },
    {
      id: "D1234599",
    },
    {
      id: "D1234599",
    },
    {
      id: "D1234599",
    },
    {
      id: "D1234599",
    },
    {
      id: "D1234599",
    },
    {
      id: "D1234599",
    },
    {
      id: "D1234599",
    },
    {
      id: "D1234599",
    },
    {
      id: "D1234599",
    },
    {
      id: "D1234599",
    },
    {
      id: "D1234599",
    },
  ];
  return (
    <>
      <div>
        {/* Age and day */}
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex mt-4">
            <div className="bg-white p-3 donor-group">
              <div className="d-flex justify-content-between">
                <span className="tittle-content">Donor Age Group</span>
                <div onClick={handleShow}>
                  <BackgroundButton
                    width="6rem"
                    height="2rem"
                    tittle="Create"
                  />
                </div>
              </div>
              <div className="row gx-0 d-flex justify-content-between align-items-center p-2 px-3 mt-3 donor-border">
                <div className="col-6 d-flex">
                  <div className="text-h6">Donor Age :</div>
                  <div className="ms-3 text-h5">18</div>
                  <div className="ms-1 text-h5">-</div>
                  <div className="ms-1 text-h5">25</div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center">
                    <div className=" me-3 icon-edit">
                      <BiEditAlt />
                    </div>
                    <div className=" me-3 icon-delete">
                      <RiDeleteBin6Line />
                    </div>
                    <div>
                      <SwitchButton className="switchButton" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gx-0 d-flex justify-content-between align-items-center p-2 px-3  mt-3 donor-border">
                <div className="col-6 d-flex">
                  <div className="text-h6">Donor Age :</div>
                  <div className="ms-3 text-h5">18</div>
                  <div className="ms-1 text-h5">-</div>
                  <div className="ms-1 text-h5">25</div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center">
                    <div className=" me-3 icon-edit">
                      <BiEditAlt />
                    </div>
                    <div className="me-3 icon-delete">
                      <RiDeleteBin6Line />
                    </div>
                    <div>
                      <SwitchButton className="switchButton " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Lapsed Donor */}
          <div className="col-lg-6 col-md-12 mt-4">
            <div className="bg-white p-3 lapsed-group">
              <div className="d-flex justify-content-between aligns-items-center">
                <span className="tittle-content">Lapsed Donor Group</span>
                <div onClick={handleShowLapsed}>
                  <BackgroundButton
                    width="6rem"
                    height="2rem"
                    tittle="Create"
                  />
                </div>
              </div>
              <div className="row gx-0 d-flex justify-content-between p-2 px-3 mt-3 donor-border ">
                <div className="col-6 d-flex align-items-center">
                  <div className="text-h6">Lapsed Time :</div>
                  <div className="ms-3 text-h5">7</div>
                  <div className="ms-1 text-h5"> - </div>
                  <div className="ms-1 text-h5">14</div>
                  <div className="ms-1 text-h5">days</div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center">
                    <div className=" me-3 icon-edit">
                      <BiEditAlt />
                    </div>
                    <div className=" me-3 icon-delete">
                      <RiDeleteBin6Line />
                    </div>
                    <div>
                      <SwitchButton className="switchButton" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gx-0 d-flex justify-content-between align-items-center p-2 px-3 mt-3 donor-border ">
                <div className="col-6 d-flex">
                  <div className="text-h6">Lapsed Time :</div>
                  <div className="ms-3 text-h5">7</div>
                  <div className="ms-1 text-h5"> - </div>
                  <div className="ms-1 text-h5">14</div>
                  <div className="ms-1 text-h5">days</div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center">
                    <div className=" me-3 icon-edit">
                      <BiEditAlt />
                    </div>
                    <div className=" me-3 icon-delete">
                      <RiDeleteBin6Line />
                    </div>
                    <div>
                      <SwitchButton className="switchButton" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gx-0 d-flex justify-content-between align-items-center p-2 px-3 mt-3 donor-border ">
                <div className="col-6 d-flex">
                  <div className="text-h6">Lapsed Time :</div>
                  <div className="ms-3 text-h5">7</div>
                  <div className="ms-1 text-h5"> - </div>
                  <div className="ms-1 text-h5">14</div>
                  <div className="ms-1 text-h5">days</div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center">
                    <div className=" me-3 icon-edit">
                      <BiEditAlt />
                    </div>
                    <div className=" me-3 icon-delete">
                      <RiDeleteBin6Line />
                    </div>
                    <div>
                      <SwitchButton className="switchButton" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Special donor group */}
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="bg-white p-3 mt-4 donor-group">
              <div className="d-flex justify-content-between aligns-items-center">
                <div className="tittle-content"> Special Donor Group</div>
                <div onClick={handleShowSpecial}>
                  <BackgroundButton
                    width="6rem"
                    height="2rem"
                    tittle="Create"
                  />
                </div>
              </div>
              <div className="row p-3 px-3 mt-3 gx-0 donor-border">
                <div className="col-lg-2 col-md-4">
                  <div className="text-special">
                    <p>Group Name :</p>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6">
                  <div>
                    <p className="text-box ">Group Name Text</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2">
                  <div className="d-flex justify-content-end align-items-center">
                    <div className=" me-3 icon-edit">
                      <BiEditAlt />
                    </div>
                    <div className="icon-delete">
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <span className="text-special">Group Members :</span>
                </div>
                <div className="col-lg-10 col-md-8 text-box ">
                  <div className="number-contain">
                    {Members.map((item, id) => {
                      return <div>{item.id}</div>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* donation Activity */}
        <div className="row ">
          <div className="col-lg-6 col-md-12 mt-4 ">
            <div className="bg-white p-3 donor-group">
              <div className="d-flex justify-content-between aligns-items-center">
                <span className="tittle-content">
                  Configure donation Activeness
                </span>
              </div>
              <div>
                <div className="row gx-0 d-flex align-items-center justify-content-between p-2 px-3 mt-3 donor-border">
                  <div className="col-5">
                    <div className="d-flex">
                      <div className="text-h6 me-2 d-flex align-items-center">
                        <GrStatusGoodSmall className="statusIcon" />
                      </div>
                      <div className="text-h5">High Activeness</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="text-h5">8</div>
                      <div className="text ms-2"> donation within</div>
                      <div className="text-h5 ms-2">60</div>
                      <div className="text ms-2">days</div>
                    </div>
                  </div>
                  <div className="col-1 d-flex justify-content-end ">
                    <span className="icon-edit" onClick={handleShowDonation}>
                      <BiEditAlt />
                    </span>
                  </div>
                </div>
                <div className="row gx-0 d-flex align-items-center justify-content-between p-2 px-3 mt-3 donor-border">
                  <div className="col-5">
                    <div className="d-flex">
                      <div className="text-h6 me-2 d-flex align-items-center">
                        <GrStatusGoodSmall className="statusIcon" />
                      </div>
                      <div className="text-h5">High Activeness</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex">
                      <div className="text-h5">8</div>
                      <div className="text ms-2"> donation within</div>
                      <div className="text-h5 ms-2">60</div>
                      <div className="text ms-2">days</div>
                    </div>
                  </div>
                  <div className="col-1 d-flex justify-content-end ">
                    <span className="icon-edit" onClick={handleShowDonation}>
                      <BiEditAlt />
                    </span>
                  </div>
                </div>
                <div className="row gx-0 d-flex align-items-center justify-content-between p-2 px-3 mt-3 donor-border">
                  <div className="col-5">
                    <div className="d-flex">
                      <div className="text-h6 me-2 d-flex align-items-center">
                        <GrStatusGoodSmall className="statusIcon" />
                      </div>
                      <div className="text-h5">High Activeness</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex">
                      <div className="text-h5">8</div>
                      <div className="text ms-2"> donation within</div>
                      <div className="text-h5 ms-2">60</div>
                      <div className="text ms-2">days</div>
                    </div>
                  </div>
                  <div className="col-1 d-flex justify-content-end ">
                    <span className="icon-edit" onClick={handleShowDonation}>
                      <BiEditAlt />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Campaign Activeness */}
          <div className="col-lg-6 col-md-12 d-inline-flex mt-4">
            <Configure
              tittle="Configure Campaign Activeness"
              firstRange="1"
              secondRange="5"
              desc="Campaign attended within"
              day="365"
              typeDate="days"
              onClick={handleShowConfigure}
            />
          </div>
        </div>
        {/* configure Referral Activeness */}
        <div className="row ">
          <div className="col-lg-6 col-md-12 mt-4">
            <Configure
              tittle="Configure Referral Activeness"
              firstRange="1"
              secondRange="10"
              desc="Success and completed referral"
              onClick={handleShowConfigure}
            />
          </div>
          {/* configure App Activeness */}
          <div className="col-lg-6 col-md-12 mt-4">
            <Configure
              tittle="Configure App Activeness"
              firstRange="1"
              secondRange="5"
              desc="Campaign attended within"
              day="365"
              typeDate="days"
              onClick={handleShowConfigure}
            />
          </div>
        </div>
      </div>
      <ModalAge isOpen={show} handleCancel={handleShow} />
      <ModalConfigure
        handleCancel={handleShowConfigure}
        isOpen={showConfigure}
        tittleConfigure="Create Campaign Activeness"
      />
      <ModalLapsed isOpen={showLapsed} handleCancel={handleShowLapsed} />
      <ModalSpecial isOpen={showSpecial} handleCancel={handleShowSpecial} />
      <ModalDonation isOpen={showDonation} handleCancel={handleShowDonation} />
    </>
  );
};
export default DonorGroup;
