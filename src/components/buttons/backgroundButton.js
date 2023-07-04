import React from 'react'

const BackgroundButton = (props) => {
    const { tittle, width, height, onClickSubmit, className, fontWeigth, fontSize, bgColor, icon, border, outLine, txtColor, bdRadius} = props;
    return (
      <div>
        <button
          type="button"
          onClick={onClickSubmit}
          className={`d-flex justify-content-center align-items-center ${className}`}
          style={{
            color: txtColor ? txtColor : "white",
            width: width ? width : "14rem",
            height: height ? height : "2.1rem",
            fontWeight: fontWeigth ? fontWeigth : 500,
            fontSize: fontSize ? fontSize:"0.875",
            backgroundColor: bgColor ? bgColor : "#0075FF",
            border: border ? border : "none",
            outline: outLine ? outLine :"none",
            borderRadius:bdRadius ? bdRadius : "7px"
          }}
        >
         <div className='me-1 d-flex justify-content-center align-items-center'>{icon}</div>
          {tittle}
        </button>
      </div>
    );
}
export default BackgroundButton