import "./KanbanBoard.scoped.scss"
import { TaskHeaderData } from './TaskHeaderData'
import {DragDropContext, DropResult} from "@krishna2323/react-beautiful-dnd"
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { updateMultipleColumn, updateSameColumn } from '../../../../store/Tasks/TaskAction'
import { onDragStartHandler, onDragUpdateHandler } from '../../helpers/helper'
import TaskColumn from './TaskColumn'

const KanbanBoard = () => {
  const tasks = useAppSelector(state=>state.tasks)
  const dispatch=useAppDispatch()

  let onDragEnd:(result:DropResult)=>void=(result)=>{
    document.getElementById("placeholder")?.remove()
    const {destination,source}=result;
    if(!destination)return;
    if(destination?.droppableId===source.droppableId && destination.index === source.index)return;
    if(destination.droppableId === source.droppableId){
    dispatch(updateSameColumn(tasks[destination.droppableId],destination,source))
    return;
    }
    dispatch(updateMultipleColumn(tasks,destination,source))
      }
  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStartHandler} onDragUpdate={onDragUpdateHandler}>
    <div className='project-content__main'>
        {TaskHeaderData.map(e=>(
          <TaskColumn  headerData={e} key={e.borderBottom}/>
        ))}
    </div>
    </DragDropContext>
  )
}

export default KanbanBoard