import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Input } from "antd";
import { Select } from "antd";
import "./donorList.css";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";
const CarddDonorList = () => {
  const [List_Donor, setUsers] = useState([
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
  ]);
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
  const [donorState, setDonorState] = useState("b");
  const [donorType, setDonorType] = useState("a");
  const [donorProgram, setDonorProgram] = useState("b");

  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <Input placeholder="Search Donor" prefix={<CiSearch />} />
        </div>
        <div className="col-12 col-md-6 col-lg-2 d-flex justify-content-end ">
          <Select
            labelInValue={0}
            onChange={DonorState}
            value={donorState}
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
        <div className="col-12 col-md-6 col-lg-2 d-flex justify-content-center">
          <Select
            labelInValue={0}
            onChange={DonorType}
            value={donorType}
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
        <div className="col-12 col-md-6 col-lg-2">
          <Select
            labelInValue={0}
            onChange={DonorProgram}
            value={donorProgram}
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
      <table className="mt-4">
        <thead className="Header-List h4-size16-grey ">
          <tr>
            <th>Donor Name</th>
            <th>Donor ID</th>
            <th>Donor State</th>
            <th>Donor Type </th>
            <th>Donor Program</th>
            <th>Register Date </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {List_Donor.map((item, index) => {
            return (
              <tr className="border-botton h5-bold-size13" key={index}>
                <td>{item.DonorName} </td>
                <td>{item.DonorID}</td>
                <td>{item.DonorState}</td>
                <td>{item.DonorType}</td>
                <td>{item.DonorProgram}</td>
                <td>{item.RegisterDate}</td>
                <td>
                  <a href="#!" onClick={() => navigate("/cardDonor")}>
                    View
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="PaginationFrom d-flex justify-content-end mt-3">
        <Pagination
          total={20}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
        />
      </div>
    </div>
  );
};
export default CarddDonorList;
