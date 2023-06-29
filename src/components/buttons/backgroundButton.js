import React from 'react'

const BackgroundButton = (props) => {
    const { tittle, width, height, onClickSubmit, className, fontWeigth, fontSize, bgColor, icon, border, outLine, txtColor, borderRadius} = props;
    return (
      <div>
        <button
          type="button"
          onClick={onClickSubmit}
          className={`btn btn-primary d-flex justify-content-center align-items-center ${className}`}
          style={{
            color: txtColor ? txtColor : "white",
            borderRadius: borderRadius ? borderRadius :'',
            width: width ? width : "14rem",
            height: height ? height : "2.1rem",
            fontWeight: fontWeigth ? fontWeigth : 500,
            fontSize: fontSize ? fontSize:"0.875",
            backgroundColor: bgColor ? bgColor : "btn-primary",
            border: border ? border : "none",
            outline: outLine ? outLine :"none"
          }}
        >
         <div className='me-1 d-flex justify-content-center align-items-center'>{icon}</div>
          {tittle}
        </button>
      </div>
    );
}
export default BackgroundButton