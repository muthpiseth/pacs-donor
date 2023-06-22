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
      <div>Header</div>
      <div>button</div>
    </div>
    <div>
      {/* {content} */}
    </div>
    <div className="bg-white p-4"
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