import React, { useState } from 'react'
import BackgroundButton from "../../components/buttons/backgroundButton";
import "../../styles/donorGroup/donorGroup.css";
import { AiOutlineEdit } from "react-icons/ai";
import SwitchButton from "../../components/switchButton/switchButton";
import Configure from "./configure";
import ModalConfigure from "../../containers/modalDonorGroup/modalConfigure";
import ModalLapsed from "../../containers/modalDonorGroup/modalLapsed";
import ModalSpecial from "../../containers/modalDonorGroup/modalSpecial";
import ModalAge from "../../containers/modalDonorGroup/modalAge";
import Radios from "../../components/radios/radios";
import { RiDeleteBin6Line } from 'react-icons/ri';
const DonorGroup = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(show === false ? true : false)
  const [showConfigure, setShowConfigure] = useState(false);
  const handleShowConfigure = () => setShowConfigure(showConfigure === false ? true : false);
  const [showLapsed, setShowLapsed] = useState(false);
  const handleShowLapsed = () => setShowLapsed(showLapsed === false ? true : false)
  const [showSpecial, setShowSpecial] = useState(false);
  const handleShowSpecial = () => setShowSpecial(showSpecial === false ? true : false)
  return (
    <>
      <div>
        {/* Age and day */}
        <div className="row">
          <div className="col-6 d-inline-flex">
            <div className="bg-white p-3 donor-group ">
              <div className="d-flex justify-content-between aligns-items-center">
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
                <div className="col-6 d-flex align-items-center">
                  <div className="text-h6">Donor Age :</div>
                  <div className="ms-3 text-h5">18</div>
                  <div className="ms-1 text-h5">-</div>
                  <div className="ms-1 text-h5">25</div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center">
                    <span className=" me-3 icon-edit">
                      <AiOutlineEdit />
                    </span>
                    <span className=" me-3 icon-delete">
                      <RiDeleteBin6Line/>
                    </span>
                    <div>
                      <SwitchButton className="switchButton" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gx-0 d-flex justify-content-between align-items-center p-2 px-3  mt-3 donor-border">
                <div className="col-6">
                  <span className="text-h6">Donor Age :</span>
                  <span className="ms-3 text-h5">18</span>
                  <span className="ms-1 text-h5">-</span>
                  <span className="ms-1 text-h5">25</span>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center">
                    <span className=" me-3 icon-edit">
                      <AiOutlineEdit />
                    </span>
                    <span className="me-3 icon-delete">
                      <RiDeleteBin6Line />
                    </span>
                    <div>
                      <SwitchButton className="switchButton " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Lapsed Donor */}
          <div className="col-6">
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
                    <span className=" me-3 icon-edit">
                      <AiOutlineEdit />
                    </span>
                    <span className=" me-3 icon-delete">
                      <RiDeleteBin6Line />
                    </span>
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
                    <span className=" me-3 icon-edit">
                      <AiOutlineEdit />
                    </span>
                    <span className=" me-3 icon-delete">
                      <RiDeleteBin6Line />
                    </span>
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
                    <span className=" me-3 icon-edit">
                      <AiOutlineEdit />
                    </span>
                    <span className=" me-3 icon-delete">
                      <RiDeleteBin6Line/>
                    </span>
                    <div>
                      <SwitchButton className="switchButton" />
                    </div>
                  </div>
                </div>
              </div> <div className="row gx-0 d-flex justify-content-between align-items-center p-2 px-3 mt-3 donor-border ">
                <div className="col-6 d-flex">
                  <div className="text-h6">Lapsed Time :</div>
                  <div className="ms-3 text-h5">7</div>
                  <div className="ms-1 text-h5"> - </div>
                  <div className="ms-1 text-h5">14</div>
                  <div className="ms-1 text-h5">days</div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center">
                    <span className=" me-3 icon-edit">
                      <AiOutlineEdit />
                    </span>
                    <span className=" me-3 icon-delete">
                      <RiDeleteBin6Line />
                    </span>
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
        <div className="bg-white p-3 mt-4 donor-group">
          <div className="d-flex justify-content-between aligns-items-center">
            <span className="tittle-content"> Special Donor Group</span>
            <div onClick={handleShowSpecial}>
              <BackgroundButton width="6rem" height="2rem" tittle="Create" />
            </div>
          </div>
          <div className="row p-2 px-3 mt-3 gx-0 donor-border">
            <div className="col-2">
              <div className="text-special">
                <p>Group Name :</p>
              </div>
            </div>
            <div className="col-8">
              <div>
                <p className="text-box ">Group Name Text</p>
              </div>
            </div>
            <div className="col-2">
              <div className="d-flex justify-content-end">
                <span className="me-3 icon-edit">
                  <AiOutlineEdit />
                </span>
                <span className="icon-delete">
                  <RiDeleteBin6Line />
                </span>
              </div>
            </div>
            <div className="col-2 ">
              <span className="text-special">Group Members:</span>
            </div>
            <div className="col-10 text-box">
              <div className="number-contain me-3">
                <p>D2244848</p>
                <p>D2244848</p>
                <p>D2244848</p>
                <p>D2244848</p>
                <p>D2244848</p>
                <p>D2244848</p>
                <p>D2244848</p>
                <p>D2244848</p>
                <p>D2244848</p>
                <p>D2244848</p>
                <p>D2244848</p>
                <p>D2244848</p>
                <p>D2244848</p>
                <p>D2244848</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          {/* donation Activity */}
          <div className="col-6 ">
            <div className="bg-white p-3 donor-group">
              <div className="d-flex justify-content-between aligns-items-center">
                <span className="tittle-content">
                  Configure donation Activeness
                </span>
              </div>
              <div>
                <div className="row gx-0 d-flex align-items-center justify-content-between p-2 px-3 mt-3 donor-border">
                  <div className="col-6">
                    <div className="d-flex">
                      <span className="text-h6 me-2 text-danger">
                        <Radios/>
                      </span>
                      <span className="text-h5">High Activeness</span>
                    </div>
                  </div>
                  <div className="col-5">
                    <span className="text-h5">8</span>
                    <span className="text ms-2"> donation within</span>
                    <span className="text-h5 ms-2">60</span>
                    <span className="text ms-2">days</span>
                  </div>
                  <div className="col-1 d-flex justify-content-end ">
                    <div>
                      <span className="icon-edit">
                        <AiOutlineEdit />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row gx-0 d-flex align-items-center justify-content-between p-2 px-3 mt-3 donor-border">
                  <div className="col-6 ">
                  <div className="d-flex">
                      <span className="text-h6 me-2 text-danger">
                        <Radios/>
                      </span>
                      <span className="text-h5">High Activeness</span>
                    </div>
                  </div>
                  <div className="col-5">
                    <span className="text-h5">8</span>
                    <span className="text ms-2"> donation within</span>
                    <span className="text-h5 ms-2">60</span>
                    <span className="text ms-2">days</span>
                  </div>
                  <div className="col-1 d-flex justify-content-end ">
                    <div>
                      <span className="icon-edit">
                        <AiOutlineEdit />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row gx-0 d-flex align-items-center justify-content-between p-2 px-3 mt-3 donor-border">
                  <div className="col-6 ">
                  <div className="d-flex">
                      <span className="text-h6 me-2 text-danger">
                        <Radios/>
                      </span>
                      <span className="text-h5">High Activeness</span>
                    </div>
                  </div>
                  <div className="col-5">
                    <span className="text-h5">8</span>
                    <span className="text ms-2"> donation within</span>
                    <span className="text-h5 ms-2">60</span>
                    <span className="text ms-2">days</span>
                  </div>
                  <div className="col-1 d-flex justify-content-end ">
                    <div>
                      <span className="icon-edit">
                        <AiOutlineEdit />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Campaign Activeness */}
          <div className="col-6 d-inline-flex">
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
        <div className="row mt-4">
          <div className="col-6">
            <Configure
              tittle="Configure Referral Activeness"
              firstRange="1"
              secondRange="10"
              desc="Success and completed referral"
              onClick={handleShowConfigure}
            />
          </div>
          {/* configure App Activeness */}
          <div className="col-6">
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
      <ModalAge 
        isOpen={show}
        handleCancel={handleShow}
      />
      <ModalConfigure
        handleCancel={handleShowConfigure}
        isOpen={showConfigure}
        tittleConfigure="Create Campaign Activeness"
      />
      <ModalLapsed 
        isOpen={showLapsed}
        handleCancel={handleShowLapsed}
      />
      <ModalSpecial 
        isOpen={showSpecial}
        handleCancel={handleShowSpecial}
      />
    </>
  );
};
export default DonorGroup;
