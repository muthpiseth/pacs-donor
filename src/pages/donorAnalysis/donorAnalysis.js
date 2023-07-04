import React from 'react'
import { Progress } from 'antd';
import ReactEcharts from "echarts-for-react";
import '../../styles/donorAnalysis/donorAnalysis.css'
import Lines from './lines';
import { CiWarning } from "react-icons/ci";
import { AiOutlineSwapRight } from "react-icons/ai";
import { TbArrowBigUpLineFilled, TbArrowBigDownLineFilled } from "react-icons/tb"
import Radios from "../../components/radios/radios";

export default function DonorAnalysis() {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: ['30%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 61, name: 'Qualified Donors' },
          { value: 4, name: 'New Donors' },
          { value: 28, name: 'Applicants Donors(not lapsed)' },
          { value: 7, name: 'Applicants Donors' },
        ]
      }
    ]
  };
  return (
    <>
      <div className="back bg-white row">
        <div className="col-lg-3 p-2">
          <div className="container bg-light bt">
            <div className="chart d-flex justify-content-center">
              <div className="text-center mt-5">
                <h2 className="h2-bold-size24">2319</h2>
                <h4 className="h4-bold-size16">Total Donors</h4>
              </div>
            </div>
            <div className="chart">
              <h4 className="h4-bold-size14 p-2">Activeness</h4>
              <div className="row text-center">
                <div className="col-md-3">
                  <div className="higher">
                    <Radios />
                  </div>
                  <h2 className="h2-bold-size24">463</h2>
                  <h4 className="h4-bold-size14 p-2">(20%)</h4>
                </div>
                <div className="col-md-3">
                  <div className="high">
                    <Radios />
                  </div>
                  <h2 className="h2-bold-size24">1109</h2>
                  <h4 className="h4-bold-size14 p-2">(20%)</h4>
                </div>
                <div className="col-md-3">
                  <div className="medium">
                    <Radios />
                  </div>
                  <h2 className="h2-bold-size24">484</h2>
                  <h4 className="h4-bold-size14 p-2">(20%)</h4>
                </div>
                <div className="col-md-3">
                  <div className="low">
                    <Radios />
                  </div>
                  <h2 className="h2-bold-size24">263</h2>
                  <h4 className="h4-bold-size14 p-2">(20%)</h4>
                </div>
              </div>
            </div>
            <div className="mt-4 mb-3">
              <small className="small-size11-grey">Donors created from Referral</small>
              <Progress strokeLinecap="butt" percent={80} size={[250, 19]} />
              <small className="small-size11-grey">Donors created from Campaing</small>
              <Progress strokeLinecap="butt" percent={85} size={[250, 19]} />
              <small className="small-size11-grey">Donors created from Other Channel</small>
              <Progress strokeLinecap="butt" percent={85} size={[250, 19]} />
              <small className="small-size11-grey">Transferred from other Channel</small>
              <Progress strokeLinecap="butt" percent={50} size={[250, 19]} />
            </div>
          </div>
          <Progress percent={100} success={{ percent: 70, }} size="small" />
        </div>
        <div className="col-lg-3 p-2">
          <div className="container bg-light bt">
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
          <Progress percent={50} size="small" />
          <div className="container bg-light text-dark bt">
            <div className="chart d-flex justify-content-center mt-5">
              <div className="text-center mb-2">
                <h2 className="h2-bold-size24">809</h2>
                <h4 className="h4-bold-size16">Applicant Donors</h4>
              </div>
            </div>
            <div className="col-12 row p-3">
              <div className="col-lg-6 text-center">
                <h2 className="h2-bold-size24">641</h2>
                <h4 className="h4-bold-size16">Not Lapsed</h4>
                <span className="per">16%</span>
              </div>
              <div className="col-lg-6 text-center">
                <h2 className="h2-bold-size24">168</h2>
                <h4 className="h4-bold-size16">Lapsed(60+)</h4>
                <span className="per">30%</span>
              </div>
            </div>
          </div>
          <Progress percent={25} size="small" />
        </div>
        <div className="col-lg-3 p-2">
          <div className="container bg-light text-dark bt">
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
          <Progress percent={80} size="small" />
          <div className="bg-light text-dark bt">
            <div className="text-warning p-2 d-flex justify-content-end"><span className="pers">1.5%</span></div>
            <div className="chart d-flex justify-content-center">
              <div className="text-center mb-3 mt-1">
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
          <Progress percent={90} size="small" />
        </div>
        <div className="col-lg-3">
          <ReactEcharts option={option} />
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
            <div className="text-info mt-3">New Donor <AiOutlineSwapRight className="text-dark" /> Applicant <TbArrowBigUpLineFilled className="text-dark" /></div>
            <div className="text-primary mt-4">Qualified <AiOutlineSwapRight className="text-dark" /> lapsed <TbArrowBigUpLineFilled className="text-dark" /> <CiWarning className="text-danger" /></div>
            <div className="text-danger mt-4">Applicant <AiOutlineSwapRight className="text-dark" /> Qualified <TbArrowBigDownLineFilled className="text-dark" /> <CiWarning /></div>
            <div className="text-warning mt-4">Donor Transfer Out <TbArrowBigDownLineFilled className="text-dark" /> <CiWarning className="text-danger" /></div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="container">
            <div>
              <h4 className="h4-bold-size15">New Donor <AiOutlineSwapRight /> Applicant Donor</h4>
              <span className="per">60% ( avarage convert rate)</span>
            </div>
            <div className="mt-3">
              <h4 className="h4-bold-size15">Applicant Donor <AiOutlineSwapRight /> Qualified Donor</h4>
              <span className="per">70% ( avarage convert rate)</span>
              <div className="h4-bold-size14-grey"><span className="text-danger"><CiWarning /> Warning : </span>Continous 3 months <TbArrowBigDownLineFilled /></div>
            </div>
            <div className="mt-3">
              <h4 className="h4-bold-size15">Qualified Donor <AiOutlineSwapRight /> Lapsed Donor </h4>
              <span className="per">10% ( avarage convert rate)</span>
              <div className="h4-bold-size14-grey"><span className="text-danger"><CiWarning /> Warning : </span>Continous 3 months <TbArrowBigUpLineFilled /></div>
            </div>
            <div className="mt-3">
              <h4 className="h4-bold-size15">Donor Transfer Out 1.5% </h4>
              <div className="h4-bold-size14-grey"><span className="text-danger"><CiWarning /> Warning : </span>Continous 3 months <TbArrowBigUpLineFilled /></div>
            </div>
          </div>
        </div>
      </div>
      {/* progress */}
      <div className="row mt-3">
        <div className="col-lg-3 bg-white back p-2">
          <div className="container">
            <div className="mt-2">
            <h4 className="h4-bold-size16">Donor Age Ranges</h4>
            </div>
            <div className="Donor_Programs">
              <small className="small-size11-grey">Age 18 - 22</small>
              <Progress strokeLinecap="butt" percent={40} size={[250, 19]} />
              <small className="small-size11-grey">Age 22 - 30</small>
              <Progress strokeLinecap="butt" percent={50} size={[250, 19]} />
              <small className="small-size11-grey">Age 30 - 50</small>
              <Progress strokeLinecap="butt" percent={60} size={[250, 19]} />
              <small className="small-size11-grey">Age 50 - 70</small>
              <Progress strokeLinecap="butt" percent={10} size={[250, 19]} className="prog" />
              <small className="small-size11-grey">Age 70+</small>
              <Progress strokeLinecap="butt" percent={7} size={[250, 19]} className="prog" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 bg-white back p-2">
          <div className="container">
            <div className="mt-2">
            <h4 className="h4-bold-size16">Donor Lapsed Time</h4>
            </div>
            <div className="Donor_Programs">
              <small className="small-size11-grey">Lapsed 14 - 30 days</small>
              <Progress strokeLinecap="butt" percent={50} size={[250, 19]} />
              <small className="small-size11-grey">Lapsed 30 - 60 days</small>
              <Progress strokeLinecap="butt" percent={40} size={[250, 19]} />
              <small className="small-size11-grey">Lapsed 60 - 90 days</small>
              <Progress strokeLinecap="butt" percent={10} size={[250, 19]} className="prog" />
              <small className="small-size11-grey">Lapsed 90 - 120 days</small>
              <Progress strokeLinecap="butt" percent={5} size={[250, 19]} className="prog" />
              <small className="small-size11-grey">Lapsed 120+ days</small>
              <Progress strokeLinecap="butt" percent={5} size={[250, 19]} className="prog" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 bg-white back p-2">
          <div className="container">
            <div className="mt-2">
            <h4 className="h4-bold-size16">Collect Volume</h4>
            </div>
            <div className="Donor_Programs">
              <small className="small-size11-grey">0 - 200 ml collect volume</small>
              <Progress strokeLinecap="butt" percent={55} size={[250, 19]} />
              <small className="small-size11-grey">200 - 250 ml collect volume</small>
              <Progress strokeLinecap="butt" percent={30} size={[250, 19]} />
              <small className="small-size11-grey">250 - 2300 ml collect volume</small>
              <Progress strokeLinecap="butt" percent={15} size={[250, 19]} className="prog" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 bg-white back p-2">
          <div className="container">
            <div className="mt-2">
            <h4 className="h4-bold-size16">Donor Programs</h4>
            </div>
            <div className="Donor_Programs">
              <small className="small-size11-grey">Donor Program 1</small>
              <Progress strokeLinecap="butt" percent={45} size={[250, 19]} />
              <small className="small-size11-grey">Donor Program 2</small>
              <Progress strokeLinecap="butt" percent={30} size={[250, 19]} />
              <small className="small-size11-grey">Donor Program 3</small>
              <Progress strokeLinecap="butt" percent={15} size={[250, 19]} className="prog" />
              <small className="small-size11-grey">Donor Program 4</small>
              <Progress strokeLinecap="butt" percent={5} size={[250, 19]} className="prog" />
              <small className="small-size11-grey">Donor Program 5</small>
              <Progress strokeLinecap="butt" percent={5} size={[250, 19]} className="prog" />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-6 bg-white back p-2">
          <div className="container">
            <div className="mt-2">
            <h4 className="h4-bold-size16">Donor Transferred in</h4>
            <h4 className="h4-bold-size14">Top 3 Transferred Centers</h4>
            </div>
            <div className="Donor_Programs">
              <small className="small-size11-grey">Centers name text</small>
              <Progress strokeLinecap="butt" percent={40} size={[250, 19]} />
              <small className="small-size11-grey">Centers name text 01</small>
              <Progress strokeLinecap="butt" percent={10} size={[250, 19]} className="prog" />
              <small className="small-size11-grey">Centers name text 02</small>
              <Progress strokeLinecap="butt" percent={28} size={[250, 19]} className="prog" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
