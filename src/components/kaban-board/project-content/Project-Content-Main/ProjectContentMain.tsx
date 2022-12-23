import React from 'react'
import "./ProjectContentMain.scoped.scss"
import { TaskHeaderData } from './TaskHeaderData'
import ProgressSection from './ProgressSection'
import {DragDropContext, DropResult, OnDragEndResponder} from "react-beautiful-dnd"
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { updateMultipleColumn, updateSameColumn } from '../../../../store/Tasks/TaskAction'

const ProjectContentMain = () => {
  const tasks = useAppSelector(state=>state.tasks)
  const dispatch=useAppDispatch()

  let onDragEnd:(result:DropResult)=>void=(result)=>{
    const {destination,source}=result;
    if(!destination)return;
    if(destination?.droppableId===source.droppableId && destination.index === source.index)return;
    if(destination.droppableId === source.droppableId){
    dispatch(updateSameColumn(tasks[destination.droppableId],destination,source))
    return;
    }
    dispatch(updateMultipleColumn(tasks,destination,source))
      }

  const onDragStart=(an:any)=>{
    console.log(an)
  }
  const onDragUpdate=(an:any)=>{
    console.log(an)
  }
  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart} onDragUpdate={onDragUpdate}>
    <div className='project-content__main'>
        {TaskHeaderData.map(e=>(
          <ProgressSection  headerData={e} key={e.borderBottom}/>
        ))}
    </div>
    </DragDropContext>
  )
}

export default ProjectContentMain