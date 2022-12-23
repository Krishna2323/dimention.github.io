import { Link } from "react-router-dom"
import AppCircleSvg from "../../../assets/Side-Navbar/AppCircleSvg"
import AtlassianSvg from "../../../assets/Side-Navbar/AtlassianSvg"
import BuyMeACoffeeSvg from "../../../assets/Side-Navbar/BuyMeACoffeeSvg"
import DimentionLogo from "../../../assets/Side-Navbar/DimentionLogo"
import DribbleSvg from "../../../assets/Side-Navbar/DribbleSvg"
import "./SideNavbar.scoped.scss"
import * as IoIcons from "react-icons/io"


const SideNavbar: React.FC = () => {
  return (
    <nav className="side-navbar">
        <div className="side-navbar__brand-logo">
            <DimentionLogo/>
        </div>
        <ul className="side-navbar__project-links">
            <li><Link  className="active" to="/"> <AppCircleSvg/></Link></li>
            <li><Link to="/"> <DribbleSvg fill="#C32361"/></Link></li>
            <li><Link to="/"> <BuyMeACoffeeSvg/></Link></li>
            <li><Link to="/"> <AtlassianSvg/></Link></li>
            <li><Link to="/"> <IoIcons.IoIosAdd style={{width:"20px",height:"20px",fill:"#533BE5"}}/></Link></li>
        </ul>
    </nav>
  )
}

export default SideNavbar