import React from "react";
import { CiSearch } from "react-icons/ci";
import { Input } from "antd";
import { Select } from "antd";
import "./donorList.css";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";
const handleChange = (value) => {
  console.log(value);
};
const CarddDonorList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <Input placeholder="Search Donor" prefix={<CiSearch />} />
        </div>
        <div className="col-12 col-md-6 col-lg-2 d-flex justify-content-end">
          <Select
            labelInValue
            defaultValue={{ value: "lucy", label: " Donor State" }}
            onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Jack (100)",
              },
              {
                value: "lucy",
                label: "Lucy (101)",
              },
            ]}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-2 d-flex justify-content-center">
          <Select
            labelInValue
            defaultValue={{ value: "lucy", label: "Donor Type" }}
            onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Jack (100)",
              },
              {
                value: "lucy",
                label: "Lucy (101)",
              },
            ]}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-2">
          <Select
            labelInValue
            defaultValue={{ value: "lucy", label: "Donor program" }}
            onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Jack (100)",
              },
              {
                value: "lucy",
                label: "Lucy (101)",
              },
            ]}
          />
        </div>
      </div>
      <table className="mt-4">
        <thead className="Header_List">
          <tr>
            <th>Date</th>
            <th>Order ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quanlity</th>
            <th>Total</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-botton h5-bold-size13">
            <td>2017-09-29 </td>
            <td>200398</td>
            <td>iPhone X 64Gb </td>
            <td>$999.00</td>
            <td>1eeee</td>
            <td>$999.00</td>
            <td>
              {" "}
              <a href="#" onClick={() => navigate("/cardDonor")}>
                View
              </a>
            </td>
          </tr>
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
