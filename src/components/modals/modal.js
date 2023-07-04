import React from 'react'
import {
    AiOutlineClose,
  } from "react-icons/ai";
  import { Button } from 'antd';
export default function Modal(props) {
  return (
    <div>
       <div className="d-flex justify-content-center align-items-center">
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" style={{ width: "37.5rem" }}>
            <div className="modal-content" >
              <div
                className="modal-body"
              >
                <span className="d-flex justify-content-end" style={{ fontSize: "1.375rem", cursor: "pointer" }}>
                  <AiOutlineClose data-bs-dismiss="modal" aria-label="Close" /></span>
                <div>
                  <h4 style={{textAlign:"center"}}>{props.header}</h4>
                </div>
                <div>{props.content}</div>
                <div className="d-flex justify-content-center align-items-center">
                  <Button type="primary" style={{
                    width: "50%"
                  }}>
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          <span className="d-flex">
            <Button type="primary">Create</Button>
          </span>
        </div>
      </div>
    </div>
  )
}
