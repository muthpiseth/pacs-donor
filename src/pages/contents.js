import React from 'react'

function Contents(props) {
  const contents = props.contents;
  return (
    <>
    <div className="d-flex justify-content-between"
      style={{
        marginBottom: "1.5rem"
      }}
    >
      <div>Donor List </div>
      <div>button</div>
    </div>
    <div className=" p-4"
      style={{
        minHeight: "29rem"
      }}
    >
      {contents}
    </div>
    </>
  )
}
export default Contents