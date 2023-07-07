import React from 'react';
import ReactEcharts from "echarts-for-react";
import '../../styles/donorAnalysis/donorAnalysis.css'
import Lines from './lines';
import { GrStatusGoodSmall } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlineSwapRight } from "react-icons/ai";
import { TbArrowBigUpLineFilled, TbArrowBigDownLineFilled } from "react-icons/tb";

export default function DonorAnalysis() {
  const option = {
    grid: {
      top: "10%",
      left: "10%",
      right: "10%",
      bottom: "10%",
    },
    series: [
      {
        type: "pie",
        data: [
          {
            value: 5,
            name: "5%",
            itemStyle: { color: "#FF2C38" },
          },
          {
            value: 30,
            name: "30%",
            itemStyle: { color: "#FFA93A" },
          },
          {
            value: 10,
            name: "10%",
            itemStyle: { color: "#A05ACE" },
          },
          {
            value: 55,
            name: "55%",
            itemStyle: { color: "#427CEC" },
          },
        ],
        itemStyle: {
          borderColor: "#FFFFFF",
          borderWidth: 1,
        },
        radius: ["30%", "65%"],
        clockwise: false,
        label: {
          normal: {
            show: false,
            position: "inside",
          },
        },
      },
    ],
    tooltip: {
      trigger: "item",
      formatter: "{b}",
    },
  };
  return (
    <>
      <div className="back p-2 bg-white row">
        <div className="col-lg-3 p-2">
          <div className="container bg bt">
            <div className="chart d-flex justify-content-center">
              <div className="text-center mb-2 mar">
                <h2 className="h2-bold-size24">2319</h2>
                <h4 className="h4-bold-size16">Total Donors</h4>
              </div>
            </div>
            <div className="chart">
              <h4 className="h4-bold-size14 p-2 mt-2">Activeness</h4>
              <div className="row text-center mt-2 mb-2">
                <div className="col-md-3">
                  <div className="higher">
                    <GrStatusGoodSmall />
                  </div>
                  <h2 className="h2-bold-size24">463</h2>
                  <h4 className="h4-bold-size14 p-2">(20%)</h4>
                </div>
                <div className="col-md-3">
                  <div className="high">
                    <GrStatusGoodSmall />
                  </div>
                  <h2 className="h2-bold-size24">1109</h2>
                  <h4 className="h4-bold-size14 p-2">(20%)</h4>
                </div>
                <div className="col-md-3">
                  <div className="medium">
                    <GrStatusGoodSmall />
                  </div>
                  <h2 className="h2-bold-size24">484</h2>
                  <h4 className="h4-bold-size14 p-2">(20%)</h4>
                </div>
                <div className="col-md-3">
                  <div className="low">
                    <GrStatusGoodSmall />
                  </div>
                  <h2 className="h2-bold-size24">263</h2>
                  <h4 className="h4-bold-size14 p-2">(20%)</h4>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-3">
              <small className="small-size11-grey">Donors created from Referral</small>
              <div style={{ display: "flex" }} className="mt-2">
                <div
                  style={{
                    width: "47%",
                    height: "1.3rem",
                    background: "#5287ED",
                    borderRadius: "0.3rem",
                  }}
                ></div>
                <div className="h3-bold-size17" style={{ margin: "0 0.5rem" }}>627</div>
                <div className="h4-bold-size14">(47%)</div>
              </div>
              <small className="small-size11-grey">Donors created from Campaing</small>
              <div style={{ display: "flex" }} className="mt-2">
                <div
                  style={{
                    width: "21%",
                    height: "1.3rem",
                    background: "#5287ED",
                    borderRadius: "0.3rem",
                  }}
                ></div>
                <div className="h3-bold-size17" style={{ margin: "0 0.5rem" }}>502</div>
                <div className="h4-bold-size14">(21%)</div>
              </div>
              <small className="small-size11-grey">Donors created from Other Channel</small>
              <div style={{ display: "flex" }} className="mt-2">
                <div
                  style={{
                    width: "47%",
                    height: "1.3rem",
                    background: "#5287ED",
                    borderRadius: "0.3rem",
                  }}
                ></div>
                <div className="h3-bold-size17" style={{ margin: "0 0.5rem" }}>1101</div>
                <div className="h4-bold-size14">(47%)</div>
              </div>
              <small className="small-size11-grey">Transferred from other Channel</small>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "5%",
                    height: "1.3rem",
                    background: "#5287ED",
                    borderRadius: "0.3rem",
                  }}
                ></div>
                <div className="h3-bold-size17" style={{ margin: "0 0.5rem" }}>125</div>
                <div className="h4-bold-size14">(5%)</div>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", marginTop: "0.5rem" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "60%",
                  height: "0.5rem",
                  backgroundColor: "#8A9EE0",
                  borderRadius: "1rem",
                }}
              ></div>
              <div
                style={{
                  width: "40%",
                  height: "0.5rem",
                  backgroundColor: "#EBA690",
                  borderRadius: "1rem",
                  marginLeft: "0.5rem",
                }}
              ></div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <small className="h6-size12-grey">Male:60%</small>
              <small className="h6-size12-grey">Female:40%</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 p-2">
          <div className="container bg bt">
            <div className="p-2 d-flex justify-content-end"><span className="per">10%</span></div>
            <div className="chart d-flex justify-content-center">
              <div className="text-center mb-2">
                <h2 className="h2-bold-size24">95</h2>
                <h4 className="h4-bold-size16">New Donors</h4>
              </div>
            </div>
            <div className="col-12 row p-3">
              <div className="col-lg-6 text-center">
                <h2 className="h2-bold-size24">21</h2>
                <h4 className="h4-bold-size16">Pending Process</h4>
              </div>
              <div className="col-lg-6 text-center">
                <h2 className="h2-bold-size24">74</h2>
                <h4 className="h4-bold-size16">Ready Donation</h4>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", marginTop: "0.5rem" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "50%",
                  height: "0.5rem",
                  backgroundColor: "#8A9EE0",
                  borderRadius: "1rem",
                }}
              ></div>
              <div
                style={{
                  width: "50%",
                  height: "0.5rem",
                  backgroundColor: "#EBA690",
                  borderRadius: "1rem",
                  marginLeft: "0.5rem",
                }}
              ></div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <small className="h6-size12-grey">Male: 50%</small>
              <small className="h6-size12-grey">Female: 50%</small>
            </div>
          </div>
          <div className="container bg bt mt-2">
            <div className="chart d-flex justify-content-center mt-5">
              <div className="text-center mb-2">
                <h2 className="h2-bold-size24">809</h2>
                <h4 className="h4-bold-size16">Applicant Donors</h4>
              </div>
            </div>
            <div className="col-12 row p-3">
              <div className="col-lg-6 text-center">
                <h2 className="h2-bold-size24">641</h2>
                <h4 className="h4-bold-size16">NotLapsed</h4>
                <span className="per">16%</span>
              </div>
              <div className="col-lg-6 text-center">
                <h2 className="h2-bold-size24">168</h2>
                <h4 className="h4-bold-size16">Lapsed(60+)</h4>
                <span className="per">30%</span>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", marginTop: "0.5rem" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "50%",
                  height: "0.5rem",
                  backgroundColor: "#8A9EE0",
                  borderRadius: "1rem",
                }}
              ></div>
              <div
                style={{
                  width: "50%",
                  height: "0.5rem",
                  backgroundColor: "#EBA690",
                  borderRadius: "1rem",
                  marginLeft: "0.5rem",
                }}
              ></div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <small className="h6-size12-grey">Male: 50%</small>
              <small className="h6-size12-grey">Female: 50%</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 p-2">
          <div className="container bg bt">
            <div className="p-2 d-flex justify-content-end"><span className="per">10%</span></div>
            <div className="chart d-flex justify-content-center">
              <div className="text-center mb-2">
                <h2 className="h2-bold-size24">1415</h2>
                <h4 className="h4-bold-size16">Quanlified Donors</h4>
              </div>
            </div>
            <div className="col-12 row p-3">
              <div className="col-lg-6 text-center">
                <h2 className="h2-bold-size24">1383</h2>
                <h4 className="h4-bold-size16">Normally Status</h4>
              </div>
              <div className="col-lg-6 text-center">
                <h2 className="h2-bold-size24">32</h2>
                <h4 className="h4-bold-size16">Deferral</h4>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", marginTop: "0.5rem" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "50%",
                  height: "0.5rem",
                  backgroundColor: "#8A9EE0",
                  borderRadius: "1rem",
                }}
              ></div>
              <div
                style={{
                  width: "50%",
                  height: "0.5rem",
                  backgroundColor: "#EBA690",
                  borderRadius: "1rem",
                  marginLeft: "0.5rem",
                }}
              ></div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <small className="h6-size12-grey">Male: 50%</small>
              <small className="h6-size12-grey">Female: 50%</small>
            </div>
          </div>
          <div className="bg bt mt-2">
            <div className="p-2 d-flex justify-content-end"><span className="pers">15%</span></div>
            <div className="chart d-flex justify-content-center">
              <div className="text-center mb-2 mt-2">
                <h2 className="h2-bold-size24">36</h2>
                <h4 className="h4-bold-size16">Transferred Donors(Out)</h4>
              </div>
            </div>
            <div className="col-12 row mt-4  mb-2">
              <div className="col-md-6 text-center ">
                <h4 className="h4-bold-size16">Quanlified</h4>
                <h4 className="h4-bold-size16">Applicant</h4>
                <h4 className="h4-bold-size16">New Donor</h4>
              </div>
              <div className="col-md-6 text-center ">
                <h4 className="h4-bold-size16">31</h4>
                <h4 className="h4-bold-size16">5</h4>
                <h4 className="h4-bold-size16">0</h4>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", marginTop: "0.5rem" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "50%",
                  height: "0.5rem",
                  backgroundColor: "#8A9EE0",
                  borderRadius: "1rem",
                }}
              ></div>
              <div
                style={{
                  width: "50%",
                  height: "0.5rem",
                  backgroundColor: "#EBA690",
                  borderRadius: "1rem",
                  marginLeft: "0.5rem",
                }}
              ></div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <small className="h6-size12-grey">Male: 50%</small>
              <small className="h6-size12-grey">Female: 50%</small>
            </div>
          </div>
        </div>
        {/* Chart */}
        <div className="col-lg-3">
          <ReactEcharts option={option} />
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20%",
                marginTop: "0.2rem",
              }}
            >
              <div
                style={{
                  width: "0.8rem",
                  height: "0.8rem",
                  borderRadius: "0.2rem",
                  backgroundColor: "#427CEC",
                }}
              ></div>
              <div style={{ margin: "0.2rem 0.4rem" }}>
                {" "}
                Qualifed Donor -
              </div>
              <div>55%</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20%",
                marginTop: "0.2rem",
              }}
            >
              <div
                style={{
                  width: "0.8rem",
                  height: "0.8rem",
                  borderRadius: "0.2rem",
                  backgroundColor: "#FFA93A",
                }}
              ></div>
              <div style={{ margin: "0.2rem 0.4rem" }}> New Donor -</div>
              <div>30%</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20%",
                marginTop: "0.2rem",
              }}
            >
              <div
                style={{
                  width: "0.8rem",
                  height: "0.8rem",
                  borderRadius: "0.2rem",
                  backgroundColor: "#A05ACE",
                }}
              ></div>
              <div style={{ margin: "0.2rem 0.4rem" }}>
                {" "}
                Applicants Donors -
              </div>
              <div>10%</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20%",
              }}
            >
              <div
                style={{
                  width: "0.8rem",
                  height: "0.8rem",
                  borderRadius: "0.2rem",
                  backgroundColor: "#FF2C38",
                }}
              ></div>
              <div style={{ margin: "0.2rem 0.4rem" }}>
                {" "}
                Applicants Donor -
              </div>
              <div>5%</div>
            </div>
          </div>
        </div>
      </div>
      {/* {line} */}
      <div className="back bg-white row mt-3 p-3">
        <div className="col-lg-6">
          <Lines />
        </div>
        <div className="col-lg-3">
          <div className="container mt-5">
            <div className="text-success">New Donor Created</div>
            <div className="text-info mt-3">New Donor <AiOutlineSwapRight className="text-dark" /> Applicant <TbArrowBigUpLineFilled className="h4-bold-size15" style={{ fontSize: "24px" }} /></div>
            <div className="text-primary mt-4">Qualified <AiOutlineSwapRight className="text-dark" /> lapsed <TbArrowBigUpLineFilled className="h4-bold-size15" style={{ fontSize: "24px" }} /> <RiErrorWarningLine className="text-danger" style={{ fontSize: "24px" }} /></div>
            <div className="text-danger mt-3">Applicant <AiOutlineSwapRight className="text-dark" /> Qualified <TbArrowBigDownLineFilled className="h4-bold-size15" style={{ fontSize: "24px" }} /> <RiErrorWarningLine style={{ fontSize: "24px" }} /></div>
            <div className="text-warning mt-3">Donor Transfer Out <TbArrowBigDownLineFilled className="h4-bold-size15" style={{ fontSize: "24px" }} /> <RiErrorWarningLine className="text-danger" style={{ fontSize: "24px" }} /></div>
          </div>
        </div>
        <div className="col-lg-3">
          <div>
            <h4 className="h4-bold-size15">New Donor <AiOutlineSwapRight /> Applicant Donor</h4>
            <span className="per">60% ( avarage convert rate )</span>
          </div>
          <div className="mt-3">
            <h4 className="h4-bold-size15">Applicant Donor <AiOutlineSwapRight /> Qualified Donor</h4>
            <span className="per">70% ( avarage convert rate )</span>
            <div className="h4-bold-size14-grey"><span className="text-danger"><RiErrorWarningLine style={{ fontSize: "20px" }} /> Warning : </span>Continous 3 months <TbArrowBigDownLineFilled style={{ fontSize: "20px" }} /></div>
          </div>
          <div className="mt-3">
            <h4 className="h4-bold-size15">Qualified Donor <AiOutlineSwapRight /> Lapsed Donor </h4>
            <span className="per">10% ( avarage convert rate )</span>
            <div className="h4-bold-size14-grey"><span className="text-danger"><RiErrorWarningLine style={{ fontSize: "20px" }} /> Warning : </span>Continous 3 months <TbArrowBigUpLineFilled style={{ fontSize: "20px" }} /></div>
          </div>
          <div className="mt-3">
            <h4 className="h4-bold-size15">Donor Transfer Out 1.5% </h4>
            <div className="h4-bold-size14-grey"><span className="text-danger"><RiErrorWarningLine style={{ fontSize: "20px" }} /> Warning : </span>Continous 3 months <TbArrowBigUpLineFilled style={{ fontSize: "20px" }} /></div>
          </div>
        </div>
      </div>
      {/* progress */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {[
          {
            title: "Donor Age Ranges",
            content: [
              { text: "Age 18-22", number: "463", percent: "20%" },
              { text: "Age 22-30", number: "695", percent: "30%" },
              { text: "Age 30-50", number: "813", percent: "35%" },
              { text: "Age 50-70", number: "233", percent: "10%" },
              { text: "Age 70+", number: "116", percent: "5%" },
            ],
          },
          {
            title: "Donor Lapsed Time",
            content: [
              { text: "Lapsed 140 - 30 days", number: "423", percent: "50%" },
              { text: "Lapsed 30 - 60 days", number: "255", percent: "30%" },
              { text: "Lapsed 60 - 90 days", number: "84", percent: "30%" },
              { text: "Lapsed 120+ days", number: "42", percent: "5%" },
            ],
          },
          {
            title: "Collect Volume",
            content: [
              {
                text: "0 - 200 ml collection volume",
                number: "1256",
                percent: "55%",
              },
              {
                text: "200 - 250 ml collection volume",
                number: "695",
                percent: "30%",
              },
              {
                text: "250 - 2300 ml collection volume",
                number: "395",
                percent: "10%",
              },
            ],
          },
          {
            title: "Donor Programs",
            content: [
              { text: "Donor Program 1", number: "1463", percent: "55%" },
              { text: "Donor Program 2", number: "695", percent: "30%" },
              { text: "Donor Program 3", number: "347", percent: "15%" },
              { text: "Donor Program 4", number: "95", percent: "5%" },
              { text: "Donor Program 5", number: "4200", percent: "80%" },
            ],
          },
        ].map((item, index) => (
          <div className='col-lg-3'
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "6px",
              padding: "1rem",
              marginTop: "1.5rem",
              width: "24.5%",
              height: "19rem",
            }}
            key={index}
          >
            <div className="h3-bold-size17">
              {item.title}
            </div>
            {item.content.map((items, idx) => (
              < div key={idx}>
                <small className="small-size11-grey">
                  {items.text}
                </small>
                <div style={{ display: "flex", margin: "0.2rem 0" }}>
                  <div
                    style={{
                      width: items.percent,
                      height: "1.2rem",
                      background: "#5287ED",
                      borderRadius: "0.3rem",
                    }}
                  ></div>
                  <div className="h4-bold-size14" style={{ margin: "0 0.5rem" }}>
                    {items.number}
                  </div>
                  <div className="h6-size12">({items.percent})</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {[
          {
            title: "Donors Transferred in",
            title1: "Top 3 Transferred Centers",
            title2: "Top 3 Transferred Reason",
            content1: [
              { text: "Center name text", number: "50", percent: "50%" },
              { text: "Centers name text 01", number: "40", percent: "33%" },
              { text: "Centers name text 02", number: "32", percent: "28%" },
            ],
            content2: [
              { text: "House moving", number: "50", percent: "40%" },
              { text: "Job change", number: "40", percent: "32%" },
              { text: "Bad experience in cebter", number: "35", percent: "28%" },
            ],
          },
          {
            title: "Donors Transferred Out",
            title1: "Top 3 Transferred Centers",
            title2: "Top 3 Transferred Reason",
            content1: [
              { text: "Centers name text", number: "29", percent: "40%" },
              { text: "Center name text", number: "7", percent: "20%" },
            ],
            content2: [
              { text: "House moving", number: "463", percent: "20%" },
              { text: "Bad experience in center", number: "18", percent: "50%" },
            ],
          },
        ].map((item, index) => (
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "6px",
              padding: "1rem",
              marginTop: "1.5rem",
              width: "49.65%",
              height: "15rem",
            }}
            key={index}
          >
            <div className="h3-bold-size17">
              {item.title}
            </div>
            <div style={{ display: "flex", marginTop: "0.4rem" }}>
              <div className="h3-bold-size17"
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  width: "50%",
                }}
              >
                {item.title1}
              </div>
              <div className="h3-bold-size17"
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  width: "50%",
                }}
              >
                {item.title2}
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "50%" }}>
                {item.content1.map((items, idx) => (
                  <div key={idx} style={{ marginTop: "0.4rem" }}>
                    <small className="small-size11-grey"
                   
                    >
                      {items.text}
                    </small>
                    <div style={{ display: "flex", margin: "0.2rem 0" }}>
                      <div
                        style={{
                          width: items.percent,
                          height: "1.2rem",
                          background: "#5287ED",
                          borderRadius: "0.3rem",
                        }}
                      ></div>
                      <div className="h4-bold-size14"
                        style={{ margin: "0 0.5rem" }}
                      >
                        {items.number}
                      </div>
                      <div className="h6-size12">
                        ({items.percent})
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ width: "50%" }}>
                {item.content2.map((its, idxs) => (
                  <div key={idxs} style={{ marginTop: "0.4rem" }}>
                    <small className="small-size11-grey"   
                    >
                      {its.text}
                    </small>
                    <div style={{ display: "flex", margin: "0.2rem 0" }}>
                      <div
                        style={{
                          width: its.percent,
                          height: "1.2rem",
                          background: "#5287ED",
                          borderRadius: "0.3rem",
                        }}
                      ></div>
                      <div className="h4-bold-size14"
                        style={{ margin: "0 0.5rem" }}
                      >
                        {its.number}
                      </div>
                      <div className="h6-size12">({its.percent})</div>
                    </div>
                  </div>
                ))}{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
};
