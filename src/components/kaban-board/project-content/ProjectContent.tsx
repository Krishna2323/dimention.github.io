import "./ProjectContent.scoped.scss";
import ProjectContentHeader from "./ProjectContentHeader";
import ProjectContentMain from "./Project-Content-Main/ProjectContentMain";
import ProjectContentToolbar from "./ProjectContentToolbar";

const ProjectContent = () => {
  return (
    <div className="project-content">
        <ProjectContentHeader/>
        <ProjectContentToolbar/>
        <ProjectContentMain/>
    </div>
  );
};

export default ProjectContent;
