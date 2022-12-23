import React from "react";
import "./ProgressSection.scoped.scss";
import { TaskHeaderObj } from "../../../../model/task-header";
import TaskCard from "../../../../UI/TaskCard/TaskCard";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { Task } from "../../../../model/Task";
import AddIcon from "../../../../assets/Project-Content/Task-Cards/Add.svg"
import EllipsisIcon from "../../../../assets/Project-Content/Task-Cards/Ellipsis.svg"
import * as IoIcons from "react-icons/io5"
import { useDispatch } from "react-redux";
import TasksForm from "../../../../store/UI/UiSlice";
import { setTaskForm } from "../../../../store/UI/UiActions";



const ProgressSection: React.FC<{ headerData: TaskHeaderObj }> = (props) => {
  const { borderBottom, icon, title, totalTask, taskType } = props.headerData;
  const dispatch=useAppDispatch()

  let tasks = useAppSelector((state) => state.tasks);
  const handleAddTaskForm=(e:React.MouseEvent<HTMLButtonElement>)=>{
    dispatch(setTaskForm(true,"Todo"))
  }

  return (
    <div
      className="todo-section"
      style={{ "--border-bottom": borderBottom } as React.CSSProperties}
    >
      <div className="header">
        <div className="header-left">
          <img src={icon} alt="circle icon" />
          <h5>{title}</h5>
          <span>{tasks[taskType].length}</span>
        </div>
        <div className="header-right">
        <img src={AddIcon} alt="Add icon" />
        <img src={EllipsisIcon} alt="Ellipsis icon" />
        </div>
      </div>
      <Droppable droppableId={taskType}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            className="tasks"
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {tasks[taskType] &&
              tasks[taskType].map((item: Task, key: number) => (
                <Draggable
                  index={key}
                  draggableId={item.id.toString()}
                  key={item.flyte}
                >
                  {(dragableProvided, dragableSnapshot) => (
                    <TaskCard
                      ref={dragableProvided.innerRef}
                      draggableProps={dragableProvided.draggableProps}
                      dragHandleProps={dragableProvided.dragHandleProps}
                      taskInfo={item}
                    />
                  )}
                </Draggable>
              ))}
            {droppableProvided.placeholder}
            <button onClick={handleAddTaskForm} className="add-card-btn">
            <IoIcons.IoAdd style={{width:"20px",height:"20px",fill:"#4734FE"}}/> Add a Card
            </button>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ProgressSection;
