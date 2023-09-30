import React from "react";
import Task from "./Task";

function TaskList({tasks,onDeleteTask} ) {
console.log("Selected category:", tasks);

  function hundleDelete(taskId){
    const newlist = tasks.filter((task, index) => index !== taskId);
    onDeleteTask(newlist);
  }
  return (
    <div className="tasks">
      {tasks.map((task,index)=>(
        <Task key={index} text={task.text} category={task.category} onDelete={() => hundleDelete(index)}/>
      ))}
    </div>
  );
}

export default TaskList;