import { Outlet } from "react-router-dom"
import Dashheader from "./Dashheader"
import DashFooter from "./DashFooter"

const DashLayout = () => {
  return (
    <>
        <Dashheader/>
        <div className="dash-container">
            <Outlet/>
        </div>
        <DashFooter/>
    </>
  )
}

export default DashLayout
