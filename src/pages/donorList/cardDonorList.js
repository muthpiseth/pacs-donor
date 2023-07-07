import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Input } from "antd";
import { Select } from "antd";
import "./donorList.css";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
const CarddDonorList = () => {
  const ListDonor = [
    {
      id: 1,
      DonorName: "Guy Hawkins",
      DonorID: "D1287S01",
      DonorState: "Active",
      DonorType: "New",
      DonorProgram: "Return Donor program",
      RegisterDate: "01/02/2023",
    },
    {
      id: 2,
      DonorName: "Guy Hawkins1",
      DonorID: "D1287S011",
      DonorState: "Active1",
      DonorType: "New1",
      DonorProgram: "Return Donor program1",
      RegisterDate: "01/02/20231",
    },
    {
      id: 3,
      DonorName: "Guy Hawkins1",
      DonorID: "D1287S011",
      DonorState: "Active1",
      DonorType: "New1",
      DonorProgram: "Return Donor program1",
      RegisterDate: "01/02/20231",
    },
  ];
  const navigate = useNavigate();
  function DonorState(e) {
    setDonorState(e);
  }
  function DonorType(e) {
    setDonorType(e);
  }
  function DonorProgram(e) {
    setDonorProgram(e);
  }
  const [donorState, setDonorState] = useState(null);
  const [donorType, setDonorType] = useState(null);
  const [donorProgram, setDonorProgram] = useState(null);

  return (
    <div>
      <div className="row  g-3">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <Input placeholder="Search Donor" prefix={<CiSearch />} />
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 d-flex justify-content-end Responsive-Tablet">
          <Select
            onChange={DonorState}
            value={donorState}
            placeholder="Donor State"
            options={[
              {
                value: "a",
                label: "Type A",
              },
              {
                value: "b",
                label: "Type B",
              },
            ]}
          />
        </div>
        <div
          className="col-lg-2 col-md-6 col-sm-6 d-flex Responsive-Tablet"
          style={{ width: "11%" }}
        >
          <Select
            labelInValue={0}
            onChange={DonorType}
            value={donorType}
            placeholder="Donor Type"
            options={[
              {
                value: "a",
                label: "Type A",
              },
              {
                value: "b",
                label: "Type B",
              },
            ]}
          />
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 d-flex justify-content-start  Responsive-Tablet Responsive-Tablet1">
          <Select
            labelInValue={0}
            onChange={DonorProgram}
            value={donorProgram}
            placeholder="Donor Program"
            options={[
              {
                value: "a",
                label: "Type A",
              },
              {
                value: "b",
                label: "Type B",
              },
            ]}
          />
        </div>
      </div>
      <div className="my-table ">
        <table className="mt-4 w-100">
          <thead className="Header-List h5-bold-size13-grey ">
            <tr>
              <th className="p-2 table-left"></th>
              <th className="row-table">Donor Name</th>
              <th className="row-table">Donor ID</th>
              <th className="row-table">Donor State</th>
              <th className="row-table">Donor Type </th>
              <th className="row-table">Donor Program</th>
              <th className="row-table">
                Register Date <AiFillCaretDown size={19} />
              </th>
              <th className="row-table">Action</th>
              <th className="table-right p-2"></th>
            </tr>
          </thead>
          <tbody>
            {ListDonor.map((item, index) => {
              return (
                <tr className="border-botton h5-bold-size13" key={index}>
                  <td></td>
                  <td className="columns-padding">{item.DonorName} </td>
                  <td className="columns-padding">{item.DonorID}</td>
                  <td className="columns-padding">{item.DonorState}</td>
                  <td className="columns-padding">{item.DonorType}</td>
                  <td className="row-table columns-padding">
                    {item.DonorProgram}
                  </td>
                  <td className="columns-padding">{item.RegisterDate}</td>
                  <td className="columns-padding">
                    <a href="#!" onClick={() => navigate("/cardDonor")}>
                      View
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="PaginationFrom d-flex justify-content-end mt-3 ">
        <Pagination
          total={20}
          showSizeChanger
          showQuickJumper
          defaultCurrent={2}
          showTotal={(total) => `Total ${total} items`}
        />
      </div>
    </div>
  );
};
export default CarddDonorList;
