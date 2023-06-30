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
import { Progress } from "antd";
const CardDonor = () => {
  const [data, setData] = useState({
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
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hell");
  };
  let countCol = 0;
  return (
    <div className="container mt-5 pt-5 pb-5">
      <a
        className="h2-bold-size24"
        href="/"
        style={{
          textDecoration: "none",
        }}
      >
        <h4>
          <img src={IconBack} /> View Donor Chart
        </h4>
      </a>
      <div className="row mt-4">
        <div className="col-12 col-md-12 col-lg-5">
          <div className="Card-Hawkins p-3">
            <div className="clearfix">
              <h5 className="float-start h2-bold-size24">Guy Hawkins</h5>
              <BackgroundButton
                tittle="Check-out"
                className="float-end ms-3"
                width="120px"
              />
              <BackgroundButton
                tittle="Check-in"
                className="float-end "
                width="110px"
              />
            </div>
            <div className="Card-Profile d-flex  mt-2  ">
              <div className="card border-0 me-3">
                <div className="ovrlay">
                  <img src={Itmeimg} alt="..." />
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

              <div className="TitleName float-start  me-3 h2-bold-size20-grey">
                <h6 className="fs-6">Donor ID</h6>
                <h6 className="fs-6">Donor State</h6>
                <h6 className="fs-6">Donor Type</h6>
                <h6 className="fs-6">Donor Program</h6>
                <h6 className="fs-6">Register Date</h6>
                <h6 className="fs-6">Location</h6>
              </div>
              <div className="h5-bold-size13 ">
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
            <div className="d-flex align-items-center justify-content-center p-2">
              <div className="col-lg-4">
                <div className="Title-Text">
                  <h4 className="ms-5 h2-bold-size24">21</h4>
                  <p className="h5-bold-size13-grey">Collection Count</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="Title-Text text-center mt-3">
                  <h4 className="h2-bold-size24">5</h4>
                  <p className="h5-bold-size13-grey">
                    Days Since <br /> Last Donation
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="Title-Text text-center mt-3 ">
                  <h4 className="h2-bold-size24">1</h4>
                  <p className="h5-bold-size13-grey">
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
                  <p className="h5-bold-size13-grey ">
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
                  <p className="h5-bold-size13-grey ">
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
                  <p className="h5-bold-size13-grey ">Serum Exp 01/12/2022</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className=" text-center ">
                  <p>
                    <AiFillCheckCircle color="#21C273" size={25} />
                  </p>
                  <p className="h5-bold-size13-grey ">Last Sample 01/12/2022</p>
                </div>
              </div>
            </div>
            <div className="ManIcon">
              <div className="row  mt-3 h4-bold-size16-grey">
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
          <div className="Card-Eligible p-3">
            <div className="row  text-start justify-content-center align-items-center">
              <div className="col-lg-3 ClassNameP h6-size12-grey">
                <h6>
                  Next Eligible
                  <br />
                  Donation Date
                </h6>
              </div>
              <div className="col-lg-3  d-flex align-items-center">
                <span className="me-3 h4-bold-size16 ">01 / 16 / 2022</span>
                <span>
                  <img src={Bell} alt="" />
                </span>
              </div>
              <div className="col-lg-3 h6-size12-grey">
                <h6>
                  Next Appointment
                  <br />
                  Date
                </h6>
              </div>
              <div className="col-lg-3">
                <span className="me-3 h4-bold-size16 ">01 / 16 / 2022</span>{" "}
                <br />
                <span className="h5-bold-size13">08:00am-08:30am</span>
              </div>
            </div>
            <div className="row justify-content-center align-items-center  mt-2">
              <div className="col-lg-6 d-flex">
                <h5 className="me-2 h3-bold-size18 ">NOTES</h5>
                <span
                  className="me-2 text-center"
                  style={{
                    width: "25px",
                    height: "20px",
                    borderRadius: "8px",
                    background: "blue",
                    color: "#fff",
                    lineHeight: "20px",
                  }}
                >
                  2
                </span>
                <a style={{ fontSize: "15px" }} href="">
                  More <img src={Moreicon} />
                </a>
              </div>
              <div className="col-lg-6  d-flex  justify-content-end">
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
            <div className="Type-Title p-2">
              <tr>
                <td className="h3-bold-size17-grey">Note Type :</td>
                <td className="h4-bold-size16">lnjured</td>
              </tr>
              <tr>
                <td className="h3-bold-size17-grey">Notes :</td>
                <td className="h4-bold-size16">
                  Notes : Doner letf arm injured
                </td>
              </tr>
            </div>
            <div className="Type-Title1 mt-3 p-2">
              <tr>
                <td className="h3-bold-size17-grey">Note Type :</td>
                <td className="h4-bold-size16">Anemai</td>
              </tr>
              <tr>
                <td className="h3-bold-size17-grey">Notes :</td>
                <td className="h4-bold-size16">
                  Donor has symptom of anemia, take care during
                  <br /> collection
                </td>
              </tr>
            </div>
          </div>
          <div className="Card-Charts mt-4 p-3 ">
            <h5 className="h2-bold-size20-grey">CHARTS</h5>
            <div className="row mt-3 h4-bold-size16-grey ">
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
      <div className="Header-Item p-3 mt-3 justify-content-between  d-flex text-center">
        {data.item.map((it, index) => (
          <div className="Header-Title h4-bold-size14-grey " key={index}>
            <div className="mt-2">{it.urlimg}</div>
            <p className="mt-2">{it.texttitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDonor;
