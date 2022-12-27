import "./KanbanHeader.scoped.scss"
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import SearchIcon from "../../../assets/Project-Content/Search.svg"
import ArrowRight from "../../../assets/Project-Content/ArrowRight.svg"
import React from "react";
import { useAppDispatch } from "./../../../hooks/redux";
import UI from "../../../../src/store/UI/UiSlice";

const KanbanHeader = () => {
  const dispatch=useAppDispatch()
  const toggleBtnHandler=(e:React.MouseEvent<HTMLButtonElement>)=>{
    dispatch(UI.actions.toggleMode({}))
  }
  return (
    <div className="kanban-header">
      <ul className="breadcrums">
        <li>
          <Link to="#">Projects</Link>
          <img src={ArrowRight} alt="arrow right"/>
        </li>
        <li>
          <Link to="#">Cloud Platform</Link>
          <img src={ArrowRight} alt="arrow right"/>
        </li>
      </ul>
      <span className="selection">Flyte</span>
      <form className="search-bar">
        <div>
          <input type={"text"} placeholder="Search"></input>
          <img src={SearchIcon} alt="Seacrh Icon"/>
        </div>
      </form>
      <Link to="#" className="header-icon">
        <BsIcons.BsLayoutSidebarReverse />
      </Link>
      <button className="btn-primary btn-primary--sm" onClick={toggleBtnHandler}>Toggle Mode</button>
    </div>
  );
};

export default KanbanHeader;
