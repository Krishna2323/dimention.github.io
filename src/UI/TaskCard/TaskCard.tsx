import "./TaskCard.scoped.scss";
import React from "react";
import User_1 from "../../assets/User-Avatars/User-1.svg";
import User_2 from "../../assets/User-Avatars/User-4.svg";
import User_3 from "../../assets/User-Avatars/User-3.svg";
import LinkIcon from "../../assets/Task-Card/link.svg";
import CalenderIcon from "../../assets/Task-Card/calendar.svg";
import CommentIcon from "../../assets/Task-Card/message.svg";
import TickCircleIcon from "../../assets/Task-Card/tick-circle.svg";
import Completed_Icon from "../../assets/Project-Content/Completed.svg"
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";
import { Task } from "../../model/Task";

interface ChildComponentProps {
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
  taskInfo: Task;
}

const TaskCard = React.forwardRef<HTMLDivElement, ChildComponentProps>(
  (props, ref) => {
    let { flyte, title, description, tag, links, messages, date, status } =
      props.taskInfo;
    return (
      <div
        className="task-card"
        ref={ref}
        {...props.dragHandleProps}
        {...props.draggableProps}
      >
        <div className="extra-bg"></div>
        <span className="flyte">{flyte}</span>
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>
        <div className="tag-and-avatars">
          <span className="tag">{tag}</span>
          <div className="avatars">
            <img src={User_1} alt="User 1" />
            <img src={User_2} alt="User 1" />
            <img src={User_3} alt="User 1" />
          </div>
        </div>
        <div className="bottom-bar">
          <span>
            <img src={CommentIcon} alt="link" />
            {messages}
          </span>
          {status === "In-Progress" && (
            <span>
              <img src={TickCircleIcon} alt="link" />
              {links}
            </span>
          )}
          <span>
            <img src={LinkIcon} alt="link" />
            {links}
          </span>
          {status !== "Completed" && (
            <span className="mr-l-auto">
              <img src={CalenderIcon} alt="link" />
              {date}
            </span>
          )}
          {status === "Completed" && (
            <span className="mr-l-auto" style={{fontWeight:"700",fontFamily:"Gt-Whelshime-Regular,sans-serif",color:"#78C552"}}>
              <img width={16} height={16} src={Completed_Icon} alt="link" />
              {"Done"}
            </span>
          )}
        </div>
      </div>
    );
  }
);

export default TaskCard;
