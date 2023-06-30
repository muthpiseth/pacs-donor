import React from "react"

function Contents(props) {
    const {content, className} = props;
  return (
    <div
      className={`p-4 ${className}`}
      style={{
        minHeight: "28.8rem",
        borderRadius: "0.5rem",
      }}
    >
      {content}
    </div>
  )
}

export default Contents