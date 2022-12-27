import "./Kanban.scoped.scss";
import KanbanHeader from "./KanbanHeader";
import KanbanToolbar from "./KanbanToolbar";
import KanbanBoard from "./KanbanBoard/KanbanBoard";

const Kanban = () => {
  return (
    <div className="kanban">
        <KanbanHeader/>
        <KanbanToolbar/>
        <KanbanBoard/>
    </div>
  );
};

export default Kanban;
