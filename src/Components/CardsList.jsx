import Cards from "./Cards"
function CardsList() {

  return (
    <>
      <div className="container">
        <Cards title="Laptop" description={["8,000 DPI", "programble Buttons"]} old={1200} news={1500} ></Cards>
        <Cards title="Mouse" description={["Wirless Mouse", "optical Orientations"]} old={2000} news={2500}></Cards>
        <Cards title="Keyboard" description={["Touch Surface", "Ipad Pro"]} old={2500} news={3000}></Cards>
      </div>
    </>
  )
}

export default CardsList
