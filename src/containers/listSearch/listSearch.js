import { Checkbox } from "antd";
import React from "react";

const ListSearch = () => {
  return (
    <div className="row p-2  g-0 checkID">
      <div className="col-1 d-flex align-items-center">
        <div className="">
          <Checkbox />
        </div>
      </div>
      <div className="col-lg-3">
        <div className="">
          <small className="h5-bold-size13-grey">Donor Name</small>
          <div className="h4-bold-size15">Wade Warren</div>
        </div>
      </div>
      <div className="col-lg-4 ">
        <div className="px-4">
          <small className="h5-bold-size13-grey">Donor Name</small>
          <div className="h4-bold-size15">D1222222</div>
        </div>
      </div>
      <div className="col-lg-4">
        <div>
          <small className="h5-bold-size13-grey">Donor Name</small>
          <div className="h4-bold-size15">Quailfied Donor</div>
        </div>
      </div>
    </div>
  );
};

export default ListSearch;
