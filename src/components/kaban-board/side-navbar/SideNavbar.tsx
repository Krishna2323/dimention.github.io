import { Link } from "react-router-dom"
import DimentionLogo from "../../../assets/Side-Navbar/dimention.svg"
import DribbleSvg from "../../../assets/Side-Navbar/dribbble.svg"
import AppCircleSvg from "../../../assets/Side-Navbar/appcircle.svg"
import AtlassianSvg from "../../../assets/Side-Navbar/atlassian.svg"
import BuyMeACoffeeSvg from "../../../assets/Side-Navbar/buymeacoffee.svg"
import "./SideNavbar.scoped.scss"
import * as IoIcons from "react-icons/io"


const SideNavbar: React.FC = () => {
  return (
    <nav className="side-navbar">
        <div className="side-navbar__brand-logo">
        <img src={DimentionLogo} alt="Dribble logo"/>
        </div>
        <ul className="side-navbar__project-links">
            <li><Link  className="active" to="/"> <img src={AppCircleSvg} alt="Dribble logo"/></Link></li>
            <li><Link to="/"> <img src={DribbleSvg} alt="Dribble logo"/></Link></li>
            <li><Link to="/"> <img src={BuyMeACoffeeSvg} alt="Dribble logo"/></Link></li>
            <li><Link to="/"> <img src={AtlassianSvg} alt="Dribble logo"/></Link></li>
            <li><Link to="/"> <IoIcons.IoIosAdd style={{width:"18px",height:"18px",fill:"#533BE5",transform:'scale(1.1)'}}/></Link></li>
        </ul>
    </nav>
  )
}

export default SideNavbar