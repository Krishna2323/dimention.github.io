import "./ProjectContentHeader.scoped.scss"
import { Link } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
import SearchIcon from "../../../assets/Project-Content/Search.svg"

const ProjectContentHeader = () => {
  return (
    <div className="project-content__header">
      <ul className="breadcrums">
        <li>
          <Link to="#">Projects</Link>
          <RiIcons.RiArrowRightSLine />
        </li>
        <li>
          <Link to="#">Cloud Platform</Link>
          <RiIcons.RiArrowRightSLine />
        </li>
      </ul>
      <span className="selection">Flyte</span>
      <form className="search-bar">
        <div>
          <input type={"text"} placeholder="Search"></input>
          <img src={SearchIcon} alt="Seacrh Icon"/>
        </div>
      </form>
      <Link to="#" className="header-icon">
        <BsIcons.BsLayoutSidebarReverse />
      </Link>
    </div>
  );
};

export default ProjectContentHeader;
