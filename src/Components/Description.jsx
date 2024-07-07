
function Description({ descriptions }) {
  return (
    <>
  {
        descriptions.map((item)=>{
      return (
        <>
          
          <p key={item}>{item} </p>
        </>
      )
    })
  }
    </>
  )
}

export default Description
