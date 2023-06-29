import React from "react"

function Contents(props) {
    const content = props.content;
  return (
    <div
      className="p-4"
      style={{
        minHeight:"29rem",
        borderRadius: "0.5rem",
      }}
    >
      {content}
    </div>
  )
}

export default Contents