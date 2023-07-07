import React, { useState } from "react";
import "../../styles/cardDonor/Donor.css";
import { AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { AiOutlineCamera } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { GrStatusGoodSmall } from "react-icons/gr";
import {
  Accounts,
  AddReferral,
  Address,
  Appointment,
  Bell,
  Communications,
  Contacts,
  DonorLog,
  Identifications,
  Message,
  Names,
  OpenIssues,
  Payments,
  Profile,
  Program,
  ReclassDonor,
  ReportLibrary,
  Rewards,
  Survey,
  TransferDonor,
  Transfers,
  Collections,
  Consents,
  Crossdonationchecks,
  Deferrais,
  Finger,
  IconBack,
  Iconbody,
  Immunizations,
  Itmeimg,
  Legacyinformation,
  Medications,
  Moreicon,
  Physicais,
  Questionnaires,
  Rbclosses,
  Reactions,
  Reviews,
  Samples,
  Screening,
  Testresuits,
  Visits,
  AppointmentHearder,
} from "../../assets/images";
import BackgroundButton from "../../components/buttons/backgroundButton";

import Clock from "react-live-clock";
const CardDonor = () => {
  const [data] = useState({
    item: [
      {
        urlimg: <img src={AppointmentHearder} alt="" />,
        texttitle: "Appointment",
      },
      {
        urlimg: <img src={Message} alt="" />,
        texttitle: "Message",
      },
      {
        urlimg: <img src={Survey} alt="" />,
        texttitle: "Survey",
      },
      {
        urlimg: <img src={ReclassDonor} alt="" />,
        texttitle: "Reclass Donor",
      },
      {
        urlimg: <img src={TransferDonor} alt="" />,
        texttitle: "Transfer Donor",
      },
      {
        urlimg: <img src={AddReferral} alt="" />,
        texttitle: "Add Referral",
      },
      {
        urlimg: <img src={OpenIssues} alt="" />,
        texttitle: "Open Issues",
      },
      {
        urlimg: <img src={DonorLog} alt="" />,
        texttitle: "Donor Log",
      },
      {
        urlimg: <img src={ReportLibrary} alt="" />,
        texttitle: "Report Library",
      },
    ],
    itemIcon: [
      {
        Texticon: <img src={Address} alt="" />,
        Texttitle: "Address",
      },

      {
        Texticon: <img src={Finger} alt="" />,
        Texttitle: "Biological Record",
      },

      {
        Texticon: <img src={Names} alt="" />,
        Texttitle: "Names",
      },
      {
        Texticon: <img src={Contacts} alt="" />,
        Texttitle: "Contacts",
      },

      {
        Texticon: <img src={Identifications} alt="" />,
        Texttitle: "Identifications",
      },

      {
        Texticon: <img src={Profile} alt="" />,
        Texttitle: "Profile",
      },
      {
        Texticon: <img src={Program} alt="" />,
        Texttitle: "Program",
      },
      {
        Texticon: <img src={Communications} alt="" />,
        Texttitle: "Communications",
      },
      {
        Texticon: <img src={Transfers} alt="" />,
        Texttitle: "Transfers",
      },
      {
        Texticon: <img src={Accounts} alt="" />,
        Texttitle: "Accounts",
      },
      {
        Texticon: <img src={Payments} alt="" />,
        Texttitle: "Payments",
      },
      {
        Texticon: <img src={Rewards} alt="" />,
        Texttitle: "Rewards",
      },
    ],
    itemChart: [
      {
        IconChart: <img src={Iconbody} alt="" />,
        TitleChart: "Body Map",
      },
      {
        IconChart: <img src={Physicais} alt="" />,
        TitleChart: "Physicais",
      },
      {
        IconChart: <img src={Samples} alt="" />,
        TitleChart: "Samples",
      },
      {
        IconChart: <img src={Medications} alt="" />,
        TitleChart: "Medications",
      },
      {
        IconChart: <img src={Screening} alt="" />,
        TitleChart: "Screening Test ",
      },
      {
        IconChart: <img src={Testresuits} alt="" />,
        TitleChart: "Test Resuits",
      },
      {
        IconChart: <img src={Collections} alt="" />,
        TitleChart: "Collections",
      },
      {
        IconChart: <img src={Immunizations} alt="" />,
        TitleChart: "Immunizations",
      },
      {
        IconChart: <img src={Visits} alt="" />,
        TitleChart: "Visits",
      },
      {
        IconChart: <img src={Rbclosses} alt="" />,
        TitleChart: "RBC Losses",
      },
      {
        IconChart: <img src={Deferrais} alt="" />,
        TitleChart: "Deferrals",
      },
      {
        IconChart: <img src={Reactions} alt="" />,
        TitleChart: "Reactions",
      },
      {
        IconChart: <img src={Reviews} alt="" />,
        TitleChart: "Reviews",
      },
      {
        IconChart: <img src={Questionnaires} alt="" />,
        TitleChart: "Questionnaires",
      },
      {
        IconChart: <img src={Consents} alt="" />,
        TitleChart: "Consents",
      },
      {
        IconChart: <img src={Appointment} alt="" />,
        TitleChart: "Appointment",
      },
      {
        IconChart: <img src={Crossdonationchecks} alt="" />,
        TitleChart: "Cross Donation Checks",
      },
      {
        IconChart: <img src={Legacyinformation} alt="" />,
        TitleChart: "Legacy Information",
      },
    ],
    DonorID: [
      {
        TextDonor: "Donor ID",
      },
      {
        TextDonor: "Donor State",
      },
      {
        TextDonor: "Donor Status",
      },
      {
        TextDonor: "Donor Type",
      },
      {
        TextDonor: "Donor Program",
      },
      {
        TextDonor: "Register Date",
      },
      {
        TextDonor: "Location",
      },
    ],
    DonorText: [
      {
        DonorTable: "D1287S91",
      },
      {
        icon: <GrStatusGoodSmall size={8} color="#21C273" />,
        DonorTable: "Active",
      },
      {
        DonorTable: "Active Donor",
      },
      {
        DonorTable: "Qualified",
      },
      {
        DonorTable: "Return Donor Program",
      },
      {
        DonorTable: "01 / 03 / 2022",
      },
      {
        DonorTable: "Location text",
      },
    ],
  });
  let countCol = 0;
  return (
    <div className="container mt-5 pt-5 pb-5" style={{ padding: "0 110px" }}>
      <a
        className="h2-bold-size20 "
        href="/"
        style={{
          textDecoration: "none",
        }}
      >
        <div>
          <img src={IconBack} alt="" className="me-3" />{" "}
          <span>View Donor Chart</span>
        </div>
      </a>
      <div className="row mt-2 g-4">
        <div className="col-12 col-md-12 col-lg-5  d-inline-flex ">
          <div className="Card-Hawkins p-3">
            <div className="clearfix">
              <h5 className="float-start h3-bold-size18 ">Guy Hawkins</h5>
              {data ===
              (
                <BackgroundButton
                  tittle="Check out"
                  className="float-end11 border-warning text-warning float-end ms-2"
                  width="7.5rem"
                />
              ) ? (
                ""
              ) : (
                <BackgroundButton
                  tittle="Check-in"
                  className="float-end "
                  width="6.875rem"
                />
              )}
            </div>
            <div className="Card-Profile d-flex  mt-2">
              <div className="card border-0 me-3">
                <div className="ovrlay">
                  <img src={Itmeimg} alt="" />
                  <div className="item-ovrlay">
                    <div>
                      <p className="text-primary">
                        <AiOutlineCamera size={18} />
                      </p>
                    </div>
                    <div>
                      <p className="text-primary">
                        <BsImage size={14} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="TitleName float-start  me-3 h6-size12-grey">
                {data.DonorID.map((item, index) => (
                  <p key={index} style={{ marginBottom: "5px" }}>
                    {item.TextDonor}
                  </p>
                ))}
              </div>
              <div className="h4-bold-size14  float-start">
                {data.DonorText.map((item, index) => (
                  <p key={index} style={{ marginBottom: "0.1rem" }}>
                    {item.icon} {item.DonorTable}
                  </p>
                ))}
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center  TextIcon">
              <div className="col-lg-4 ">
                <div className="Title-Text">
                  <h4 className="ms-5 h2-bold-size24">21</h4>
                  <p className="h4-size16-grey">Collection Count</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="Title-Text text-center mt-2">
                  <h4 className="h2-bold-size24">5</h4>
                  <p className="h4-size16-grey">
                    Days Since <br /> Last Donation
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="Title-Text text-center mt-2">
                  <h4 className="h2-bold-size24">1</h4>
                  <p className="h4-size16-grey">
                    Appointments <br /> in 7 days
                  </p>
                </div>
              </div>
            </div>
            <div
              className="d-flex mt-2 "
              style={{ borderBottom: "0.125rem  dashed #ddd" }}
            >
              <div className="col-lg-3">
                <div className="">
                  <p className="text-center">
                    <AiFillCheckCircle color="#21C273" size={25} />
                  </p>
                  <p className="small-size11-grey">
                    Last Collection 01/11/2022 200ml
                    <br /> Last payout: $70
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className=" text-center ">
                  <p>
                    <AiFillCheckCircle color="#21C273" size={25} />
                  </p>
                  <p className="small-size11-grey">
                    Last Annual <br />
                    Medical Check 02/15/2022
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className=" text-center ">
                  <p>
                    <AiFillCheckCircle color="#21C273" size={25} />
                  </p>
                  <p className="small-size11-grey">Serum Exp 01/12/2022</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className=" text-center ">
                  <p>
                    <AiFillCheckCircle color="#21C273" size={25} />
                  </p>
                  <p className="small-size11-grey">Last Sample 01/12/2022</p>
                </div>
              </div>
            </div>
            <div className="ManIcon ">
              <div className="row  mt-3 h5-bold-size13   p-2 ">
                {data.itemIcon.map((item, index) => (
                  <>
                    <div
                      style={{ padding: 0 }}
                      className={`${countCol++} div-${countCol} ${
                        countCol === 2
                          ? "col-lg-6 col-md-4"
                          : "col-lg-3 col-md-4 "
                      } ${countCol === 3 ? (countCol = 0) : ``}  mb-3`}
                      key={index}
                    >
                      {item.Texticon} {item.Texttitle}
                    </div>
                    {index === 8 && (
                      <div className="container pb-3">
                        <div className="TextBorderTop"></div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-7">
          <div className="Card-Eligible p-3 ">
            <div className="justify-content-between  d-flex">
              <div className="h6-size12-grey">
                <div>
                  Next Eligible
                  <br />
                  Donation Date
                </div>
              </div>
              <div className=" d-flex  justify-content-between hello">
                <p className="h4-bold-size16 align-items-center  d-flex me-3">
                  <Clock format={"DD / MM / YYYY"} ticking={true} />
                </p>
                <p>
                  <img src={Bell} alt="" />
                </p>
              </div>

              <div className=" h6-size12-grey ">
                <div>
                  Next Appointment
                  <br />
                  Date
                </div>
              </div>
              <div>
                <span className="h4-bold-size16 ">
                  <Clock format={"DD / MM / YYYY"} ticking={true} />
                </span>
                <br />
                <span className="h6-size12">
                  <Clock format={"h:mm:ssa"} ticking={true} />
                </span>
              </div>
            </div>
            <div className="row justify-content-center align-items-center  mt-3">
              <div className="col-lg-6 col-md-6 d-flex align-items-center">
                <div className="me-2 h3-bold-size18">NOTES</div>
                <div
                  className="me-2 text-center"
                  style={{
                    width: "1.563rem",
                    height: "1.25rem",
                    borderRadius: "0.5rem",
                    background: "#0075FF",
                    color: "#fff",
                    lineHeight: "1.25rem",
                  }}
                >
                  2
                </div>
                <a style={{ fontSize: "13px", fontWeight: "500" }} href="#!">
                  More <img src={Moreicon} alt="" />
                </a>
              </div>
              <div className="col-lg-6 col-md-6 d-flex  justify-content-end ">
                <BackgroundButton
                  icon={<AiOutlinePlus />}
                  tittle="Add New Notes"
                  txtColor="#152C5B"
                  className="float-end11"
                  width="11.875rem"
                />
              </div>
            </div>
            <div className="Type-Title p-2 mt-3">
              <div className=" d-flex mb-1">
                <div className="h4-bold-size13-grey">Note Type :</div>
                <div className="ms-4 h4-bold-size15">lnjured</div>
              </div>
              <div className=" d-flex">
                <div className="h4-bold-size13-grey">Note Type :</div>
                <div className="ms-4 h4-bold-size15">
                  Doner letf arm injured
                </div>
              </div>
            </div>
            <div className="Type-Title1 p-2 mt-3">
              <div className=" d-flex mb-1">
                <div className="h4-bold-size13-grey">Note Type :</div>
                <div className="ms-4 h4-bold-size15">Anemai</div>
              </div>
              <div className=" d-flex">
                <div className="h4-bold-size13-grey row-table1">
                  Note Type :
                </div>
                <div className="ms-4 h4-bold-size15">
                  Donor has symptom of anemia, take care during
                  <br />
                  collection
                </div>
              </div>
            </div>
          </div>
          <div className="Card-Charts mt-4 p-3">
            <h5 className="h3-bold-size18">CHARTS</h5>
            <div className="row  mt-3 h5-bold-size13 ">
              {data.itemChart.map((item, index) => (
                <>
                  <div
                    style={{ paddingRight: 0 }}
                    className="col-lg-4  mb-3  col-md-6"
                    key={index}
                  >
                    {item.IconChart}
                    <span> {item.TitleChart} </span>
                  </div>
                  {index === 5 && (
                    <div className="container pb-3">
                      <div className="TextBorderTop"></div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="Header-Item p-3 mt-4 justify-content-between  d-flex text-center">
        {data.item.map((MainHeader, index) => (
          <div className="Header-Title h5-bold-size13 " key={index}>
            <div className="mt-2">{MainHeader.urlimg}</div>
            <p className="mt-2 Title-none">{MainHeader.texttitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDonor;
