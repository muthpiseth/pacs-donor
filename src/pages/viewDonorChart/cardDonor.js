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
  appointment,
  collections,
  consents,
  crossdonationchecks,
  deferrais,
  finger,
  iconBack,
  iconbody,
  immunizations,
  itmeimg,
  legacyinformation,
  medications,
  moreicon,
  physicais,
  questionnaires,
  rbclosses,
  reactions,
  reviews,
  samples,
  screening,
  testresuits,
  visits,
} from "../../assets/images";
import BackgroundButton from "../../components/buttons/backgroundButton";
const CardDonor = () => {
  const [data, setData] = useState({
    item: [
      {
        urlimg: <img src={Appointment} alt="" />,
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
        Texticon: <img src={finger} alt="" />,
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
        IconChart: <img src={iconbody} alt="" />,
        TitleChart: "Body Map",
      },
      {
        IconChart: <img src={physicais} alt="" />,
        TitleChart: "Physicais",
      },
      {
        IconChart: <img src={samples} alt="" />,
        TitleChart: "Samples",
      },
      {
        IconChart: <img src={medications} alt="" />,
        TitleChart: "Medications",
      },
      {
        IconChart: <img src={screening} alt="" />,
        TitleChart: "Screening Test ",
      },
      {
        IconChart: <img src={testresuits} alt="" />,
        TitleChart: "Test Resuits",
      },
      {
        IconChart: <img src={collections} alt="" />,
        TitleChart: "Collections",
      },
      {
        IconChart: <img src={immunizations} alt="" />,
        TitleChart: "Immunizations",
      },
      {
        IconChart: <img src={visits} alt="" />,
        TitleChart: "Visits",
      },
      {
        IconChart: <img src={rbclosses} alt="" />,
        TitleChart: "RBC Losses",
      },
      {
        IconChart: <img src={deferrais} alt="" />,
        TitleChart: "Deferrals",
      },
      {
        IconChart: <img src={reactions} alt="" />,
        TitleChart: "Reactions",
      },
      {
        IconChart: <img src={reviews} alt="" />,
        TitleChart: "Reviews",
      },
      {
        IconChart: <img src={questionnaires} alt="" />,
        TitleChart: "Questionnaires",
      },
      {
        IconChart: <img src={consents} alt="" />,
        TitleChart: "Consents",
      },
      {
        IconChart: <img src={appointment} alt="" />,
        TitleChart: "Appointment",
      },
      {
        IconChart: <img src={crossdonationchecks} alt="" />,
        TitleChart: "Cross Donation Checks",
      },
      {
        IconChart: <img src={legacyinformation} alt="" />,
        TitleChart: "Legacy Information",
      },
    ],
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hell");
  };
  let countCol = 0;
  return (
    <div className="container mt-5 pt-5 pb-5">
      <a
        href="/"
        style={{
          color: "#152C5B",
          fontSize: "20px",
          fontWeight: "600",
          textDecoration: "none",
        }}
      >
        {" "}
        <h4>
          <img src={iconBack} /> View Donor Chart
        </h4>
      </a>
      <div className="row mt-4">
        <div className="col-12 col-md-12 col-lg-5">
          <div className="Cardhawkins p-3">
            <div className="clearfix">
              <h5
                className="float-start"
                style={{
                  color: "#152C5B",
                  fontSize: "19px",
                  fontWeight: "600",
                }}
              >
                Guy Hawkins
              </h5>
              <BackgroundButton
                tittle="Check-in"
                className="float-end"
                width="100px"
              />
            </div>
            <div className="CardProfile d-flex  mt-2  ">
              <div className="card border-0 me-3">
                <div className="ovrlay">
                  <img src={itmeimg} alt="..." />
                  <div className="item-ovrlay">
                    <div>
                      <p className="text-primary">
                        <AiOutlineCamera size={20} />
                      </p>
                    </div>
                    <div>
                      <p className="text-primary">
                        <BsImage size={16} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="TitleName float-start  me-3 text-secondary">
                <h6 className="fs-6">Donor ID</h6>
                <h6 className="fs-6">Donor State</h6>
                <h6 className="fs-6">Donor Type</h6>
                <h6 className="fs-6">Donor Program</h6>
                <h6 className="fs-6">Register Date</h6>
                <h6 className="fs-6">Location</h6>
              </div>
              <div className="text-primary-emphasis">
                <h6 className="fs-6">D129999</h6>
                <h6 className="fs-6">
                  <GrStatusGoodSmall size={8} color="#21C273" /> Active
                </h6>
                <h6 className="fs-6"> Qualified</h6>
                <h6 className="fs-6">Return Donor Perogram</h6>
                <h6 className="fs-6">01 / 03/ 2022</h6>
                <h6 className="fs-6">Location text</h6>
              </div>
            </div>
            <div
              className="d-flex align-items-center justify-content-center p-2"
              style={{ borderBottom: "2px  dashed #ddd" }}
            >
              <div className="col-lg-4">
                <div className="Titletext">
                  <h4
                    className=" ms-5 text-primary-emphasis"
                    style={{ fontWeight: "600" }}
                  >
                    21
                  </h4>
                  <p
                    className=" text-secondary"
                    style={{ fontSize: "13px", fontWeight: "500" }}
                  >
                    Collection Count
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="Titletext text-center mt-3">
                  <h4
                    className="text-primary-emphasis"
                    style={{ fontWeight: "600" }}
                  >
                    5
                  </h4>
                  <p
                    className=" text-secondary"
                    style={{ fontSize: "13px", fontWeight: "500" }}
                  >
                    Days Since <br /> Last Donation
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="Titletext text-center mt-3 ">
                  <h4
                    className="text-primary-emphasis"
                    style={{ fontWeight: "600" }}
                  >
                    1
                  </h4>
                  <p
                    className=" text-secondary"
                    style={{ fontSize: "13px", fontWeight: "500" }}
                  >
                    Appointments <br /> in 7 days
                  </p>
                </div>
              </div>
            </div>
            <div
              className="d-flex p-2"
              style={{ borderBottom: "2px  dashed #ddd" }}
            >
              <div className="col-lg-3">
                <div className="">
                  <p className="text-center">
                    <AiFillCheckCircle color="#21C273" size={25} />
                  </p>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "12px", fontWeight: "500" }}
                  >
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
                  <p
                    className="text-secondary"
                    style={{ fontSize: "12px", fontWeight: "500" }}
                  >
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
                  <p
                    className=" text-secondary"
                    style={{ fontSize: "12px", fontWeight: "500" }}
                  >
                    Serum Exp 01/12/2022
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className=" text-center ">
                  <p>
                    <AiFillCheckCircle color="#21C273" size={25} />
                  </p>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "12px", fontWeight: "500" }}
                  >
                    Last Sample 01/12/2022
                  </p>
                </div>
              </div>
            </div>
            <div className="ManIcon">
              <div
                className="row  mt-3 "
                style={{ color: "#152C5B", fontWeight: "500", opacity: "80%" }}
              >
                {data.itemIcon.map((item, index) => (
                  <>
                    <div
                      className={`${countCol++} div-${countCol} ${
                        countCol === 2 ? "col-lg-6" : "col-lg-3"
                      } ${countCol === 3 ? (countCol = 0) : ``}  mb-4`}
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
          <div className="Cardeligible p-3">
            <div className="row  text-start justify-content-center align-items-center">
              <div className="col-lg-3 ClassNameP text-secondary">
                <h6>
                  Next Eligible
                  <br />
                  Donation Date
                </h6>
              </div>
              <div
                className="col-lg-3  d-flex align-items-center"
                style={{ color: "#152C5B", fontWeight: "500", opacity: "90%" }}
              >
                <span className="me-3">01 / 16 / 2022</span>
                <span>
                  <img src={Bell} alt="" />
                </span>
              </div>
              <div className="col-lg-3 ClassNameP text-secondary">
                <h6>
                  Next Appointment
                  <br />
                  Date
                </h6>
              </div>
              <div
                className="col-lg-3"
                style={{ color: "#152C5B", fontWeight: "500", opacity: "90%" }}
              >
                <span className="me-3">01 / 16 / 2022</span> <br />
                <span className="ClassNameP">08:00am-08:30am</span>
              </div>
            </div>
            <div className="row justify-content-center align-items-center  mt-2">
              <div className="col-lg-6 ClassNameP d-flex">
                <h5
                  className="me-2"
                  style={{ color: "#152C5B", fontWeight: "500" }}
                >
                  NOTES
                </h5>
                <span
                  className="me-2 text-center"
                  style={{
                    width: "25px",
                    height: "20px",
                    borderRadius: "8px",
                    background: "blue",
                    color: "#fff",
                  }}
                >
                  2
                </span>
                <a style={{ fontSize: "15px" }} href="">
                  More <img src={moreicon} />
                </a>
              </div>
              <div className="col-lg-6  ClassNameP d-flex  justify-content-end">
                <h6
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontWeight: "600",
                    color: "#152C5B",
                    opacity: "90%",
                  }}
                  className="p-2"
                  onClick={handleSubmit}
                >
                  <AiOutlinePlus /> Add new Notes
                </h6>
              </div>
            </div>
            <div className="TypeTitle p-2">
              <tr>
                <td>Note Type :</td>
                <td>lnjured</td>
              </tr>
              <tr>
                <td>Notes :</td>
                <td>Notes : Doner letf arm injured</td>
              </tr>
            </div>
            <div className="TypeTitle1 mt-3 p-2">
              <tr>
                <td>Note Type :</td>
                <td>Anemai</td>
              </tr>
              <tr>
                <td>Notes :</td>
                <td>
                  Donor has symptom of anemia, take care during
                  <br /> collection
                </td>
              </tr>
            </div>
          </div>
          <div className="Cardcharts mt-4 p-3">
            <h5 style={{ color: "#152C5B", fontWeight: "600", opacity: "80%" }}>
              CHARTS
            </h5>
            <div
              className="row mt-3"
              style={{ color: "#152C5B", fontWeight: "500", opacity: "80%" }}
            >
              {data.itemChart.map((item, index) => (
                <>
                  <div className="col-lg-4  mb-4" key={index}>
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
      <div className="HeaderItem p-3 mt-3 justify-content-between  d-flex text-center">
        {data.item.map((it, index) => (
          <div className="HeaderTitle" key={index}>
            <div className="mt-2">{it.urlimg}</div>
            <p className="mt-2">{it.texttitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDonor;
