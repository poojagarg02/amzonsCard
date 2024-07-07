import Description from "./Description"
import Prices from "./Prices"
import Title from "./Title"
import "./Cards.css"
function Cards({ title, description, old,news }) {

  return (
    <>
      <div className="border">
        <Title titles={title} ></Title>
        <Description descriptions={description}></Description>
        <Prices olds={old} newss={news}></Prices>
      </div>
    </>
  )
}

export default Cards