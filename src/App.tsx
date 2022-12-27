import './App.scss';
import Kanban from './components/kaban-board/kanban/Kanban';
import ProjectDetails from './components/kaban-board/project-navbar/ProjectNavbar';
import SideNavbar from './components/kaban-board/side-navbar/SideNavbar';
import { useAppSelector } from './hooks/redux';
import TaskFormModal from './UI/TaskFormModal/TaskFormModal';

function App() {
  const {mode}=useAppSelector(state=>state.ui)
  return (
    <div className={`kanban-board ${mode ? "light-mode" : "dark-mode"}`}>
      <SideNavbar/>
      <ProjectDetails/>
      <Kanban/>
      <TaskFormModal open={true}/>
    </div>
  );
}

export default App;
