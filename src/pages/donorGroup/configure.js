import React from "react";
import BackgroundButton from "../../components/buttons/backgroundButton";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const Configure = (props) => {
  const { tittle, firstRange, secondRange, desc, day, typeDate, onClick } =
    props;
  return (
    <>
      <div className="bg-white p-3 mt-3 donor-group">
        <div className="d-flex justify-content-between aligns-items-center">
          <span className="tittle-content">{tittle}</span>
          <div onClick={onClick}>
            <BackgroundButton width="6rem" height="2rem" tittle="Create" />
          </div>
        </div>
        <div className="row gx-0 d-flex align-items-center justify-content-between p-2 px-3  mt-3 donor-border">
          <div className="col-8">
            <span className=" text-h5">{firstRange}</span>
            <span className=" ms-1 text-h5">-</span>
            <span className="ms-1 text-h5">{secondRange}</span>
            <span className="text ms-2">{desc}</span>
            <span className="text-h5 ms-2">{day}</span>
            <span className=" text ms-2">{typeDate}</span>
          </div>
          <div className="col-4">
            <div className="text-end">
              <span className=" me-3 icon-edit">
                <AiOutlineEdit />
              </span>
              <span className="icon-delete">
                <AiOutlineDelete />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Configure;
