import React from "react";
import { CiSearch } from "react-icons/ci";
import { Input } from "antd";
import { Select } from "antd";
import "./donorList.css";
import { Pagination } from "antd";
import FilterForm from "../../components/filterForm";
const handleChange = (value) => {
};
const CardDonorList = () => {
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
      <FilterForm />
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
export default CardDonorList;
