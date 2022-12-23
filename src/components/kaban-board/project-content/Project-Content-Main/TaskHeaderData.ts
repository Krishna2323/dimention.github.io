import DashedCircle from "../../../../assets/Project-Content/Dashed-Circle.svg";
import { TaskHeaderObj } from "../../../../model/task-header";
import In_Progress_Icon from "../../../../assets/Project-Content/In-Progress.svg"
import Completed_Icon from "../../../../assets/Project-Content/Completed.svg"
import { dummmyTasks } from "../../../../data/DummyTasks";


export const TaskHeaderData:TaskHeaderObj[] = [
  {
    title: "TODO",
    icon: DashedCircle,
    totalTask: 2,
    borderBottom: "#111118",
    taskType:"todoTasks"
  },
  {
    title: "IN-PROGRESS",
    icon: In_Progress_Icon,
    totalTask: 8,
    borderBottom: "#4734FE",
    taskType:"inProgressTasks"

  },
  {
    title: "COMPLETED",
    icon: Completed_Icon,
    totalTask: 2,
    borderBottom: "#78C552",
    taskType:"completedTasks"

  },
];
