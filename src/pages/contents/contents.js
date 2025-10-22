import React from "react"

function Contents(props) {
    const {content, className} = props;
  return (
    <div
      className={className}
      style={{
        minHeight: "49rem",
        borderRadius: "0.5rem",
      }}
    >
      {content}
    </div>
  )
}

export default Contents