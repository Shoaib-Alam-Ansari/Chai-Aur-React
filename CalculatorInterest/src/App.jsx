import { NavLink } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { CompoundInterest } from "./Components"
import Header from "./Components/Header/Header"

function App() {

  return (
  <>
  <div className="container">
    <div className="row">
      <div className="">
        <Header />
        <CompoundInterest />
      </div>
    </div>
  </div>
  </>
  )
}

export default App
