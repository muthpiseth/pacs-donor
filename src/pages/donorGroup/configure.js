import React from "react";
import BackgroundButton from "../../components/buttons/backgroundButton";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";

const Configure = (props) => {
  const { tittle, firstRange, secondRange, desc, day, typeDate, onClick } =
    props;
  return (
    <>
      <div className="bg-white p-3  donor-group">
        <div className="d-flex justify-content-between aligns-items-center">
          <span className="tittle-content">{tittle}</span>
          <div onClick={onClick}>
            <BackgroundButton width="6rem" height="2rem" tittle="Create" />
          </div>
        </div>
        <div className="row gx-0 d-flex align-items-center justify-content-between p-2 px-3  mt-3 donor-border">
          <div className="col-8">
          <div className="d-flex">
          <div className="text-h5">{firstRange}</div>
            <div className=" ms-1 text-h5">-</div>
            <div className="ms-1 text-h5">{secondRange}</div>
            <div className="text ms-2">{desc}</div>
            <div className="text-h5 ms-2">{day}</div>
            <div className=" text ms-2">{typeDate}</div>
          </div>
          </div>
          <div className="col-4">
            <div className="d-flex justify-content-end">
            <div className=" me-3 icon-edit">
                      <BiEditAlt/>
                    </div>
              <div className="icon-delete">
                <RiDeleteBin6Line />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Configure;
