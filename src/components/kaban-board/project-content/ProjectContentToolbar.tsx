import "./ProjectContentToolbar.scoped.scss";
import User_1_Avatar from "./../../../assets/User-Avatars/User-1.svg";
import User_2_Avatar from "./../../../assets/User-Avatars/User-2.svg";
import CloudIcon from "../.../../../../assets/Project-Content/Toolbar/Cloud.svg";
import MenuIcon from "../.../../../../assets/Project-Content/Toolbar/Menu.svg";
import HeadphoneIcon from "../.../../../../assets/Project-Content/Toolbar/Headphone.svg";
import LinkIcon from "../.../../../../assets/Project-Content/Toolbar/Link.svg";
import DashboardIcon from "../.../../../../assets/Project-Content/Toolbar/Dashboard.svg";

const ProjectContentToolbar = () => {
  return (
    <div className="project-content__toolbar">
      <div className="btns-left btns-div">
        <button className="btn-primary">
          <img src={CloudIcon} alt="cloud icon" />
          25%
        </button>
        <button className="btn-primary">Filter</button>
      </div>
      <div className="avatars">
        <img src={User_1_Avatar} alt="user-1" />
        <img src={User_2_Avatar} alt="user-2" />
      </div>
      <div className="btns-right btns-div">
        <button className="btn-primary btn-primary--divider">
          <div  className="icon-bg-grey">
            <img src={MenuIcon} alt="Menu icon" />
          </div>
          <img src={DashboardIcon} alt="Dashboard icon" />
        </button>
        <button className="btn-primary">
          <img src={HeadphoneIcon} alt="Headphone icon" />
        </button>
        <button className="btn-primary">
          <img src={LinkIcon} alt="Link icon" />
          Share
        </button>
      </div>
    </div>
  );
};

export default ProjectContentToolbar;
