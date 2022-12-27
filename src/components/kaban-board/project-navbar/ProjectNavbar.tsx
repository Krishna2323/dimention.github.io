import React from "react";
import "./ProjectNavbar.scoped.scss";
import ProjectImage from "../../../assets/Project-Details/ProjectImage.png";
import PartySvg from "../../../assets/Project-Details/Party.svg"
import ArrowIcon from "../../../assets/Project-Details/arrow.svg"
import ShieldIcon from "../../../assets/Project-Details/Shield.svg"


const ProjectNavbar: React.FC = () => {
  return (
    <div className="project-navbar">
      <div className="project-name">
        <h2>Project Name</h2>
      </div>
      <div className="project-image">
        <img src={ProjectImage} alt="Project" />
      </div>
      <div className="project-progress">
        <div className="project-progress__stats">
          <span className="project-progress__stats-level"><img src={ShieldIcon} alt="Shield Svg"/>Level 1</span>
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

export default ProjectNavbar;
