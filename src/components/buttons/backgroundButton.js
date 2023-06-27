import React from 'react'

const BackgroundButton = (props) => {
    const { tittle, width, height, onClickBtn, className, fontWeigth ,fontSize} = props;
    return (
      <div>
        <button
          type="button"
          onClickBtn={onClickBtn}
          className={`btn btn-primary d-flex justify-content-center align-items-center ${className}`}
          style={{
            width: width ? width : "14rem",
            height: height ? height : "2.1rem",
            fontWeight: fontWeigth ? fontWeigth : 500,
            fontSize:fontSize ? fontSize:"0.875"
          }}
        >
          {tittle}
        </button>
      </div>
    );
}
export default BackgroundButton