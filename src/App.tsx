import './App.scss';
import ProjectContent from './components/kaban-board/project-content/ProjectContent';
import ProjectDetails from './components/kaban-board/project-sidebar/ProjectSidebar';
import SideNavbar from './components/kaban-board/side-navbar/SideNavbar';
import TaskFormModal from './UI/TaskFormModal/TaskFormModal';

function App() {
  return (
    <div className="kanban-board">
      <SideNavbar/>
      <ProjectDetails/>
      <ProjectContent/>
      <TaskFormModal open={true}/>
    </div>
  );
}

export default App;
