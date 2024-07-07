
function Prices({ olds, newss }) {
  return (
    <>
      <div style={{ backgroundColor: "orange" }}>
        <span > <del>{olds}</del></span> <span> {newss} </span>
      </div>
    </>
  )
}

export default Prices
