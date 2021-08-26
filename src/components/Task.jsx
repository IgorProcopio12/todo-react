import React from "react";
import { CgClose } from "react-icons/cg"
import { CgCheck } from "react-icons/cg";
import { CgDetailsMore } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";


const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`)
  }
  return (
    <div className="task-container" style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}>
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
      <button className="details-task-button" onClick={handleTaskDetailsClick}>
          <CgDetailsMore />
        </button>
        <button className="done-task-button" onClick={() => handleTaskClick(task.id)}>
          <CgCheck />
        </button>
        <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>
          <CgClose />
        </button>
      </div>

    </div>
  )
};

export default Task;
