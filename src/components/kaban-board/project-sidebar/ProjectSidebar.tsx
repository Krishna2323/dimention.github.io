import React from "react";
import "./ProjectSidebar.scoped.scss";
import ProjectImage from "../../../assets/Project-Details/ProjectImage.png";
import * as RiIcons from "react-icons/ri"
import * as TiIcons from "react-icons/ti"
import PartySvg from "../../../assets/Project-Details/Party.svg"
import ArrowIcon from "../../../assets/Project-Details/arrow.svg"


const ProjectSidebar: React.FC = () => {
  return (
    <div className="project-sidebar">
      <div className="project-name">
        <h2>Project Name</h2>
      </div>
      <div className="project-image">
        <img src={ProjectImage} alt="Project" />
      </div>
      <div className="project-progress">
        <div className="project-progress__stats">
          <h5 className="project-progress__stats-level"><RiIcons.RiShieldFlashLine/>Level 1</h5>
          <span className="project-progress__stats-percentage">40%</span>
        </div>
        <div className="project-progress__progress-bar" style={{"--project-progress":"45%"} as React.CSSProperties}>
          <img className="project-progress__progress-bar__icon" src={PartySvg} alt="party" />
        </div>
      </div>
      <div className="project-task">
          <ul className="project-task-list">
            <li>Lorem <img src={ArrowIcon} alt="arrow"/></li>
            <li>Ipsum <img src={ArrowIcon} alt="arrow"/></li>
            <li>Dolor <img src={ArrowIcon} alt="arrow"/></li>
            <li>Amet <img src={ArrowIcon} alt="arrow"/></li>
            <li>Tempor <img src={ArrowIcon} alt="arrow"/></li>
            <li>Magna <img src={ArrowIcon} alt="arrow"/></li>
          </ul>
      </div>
    </div>
  );
};

export default ProjectSidebar;
