import React from "react";

function Task({text, category,onDelete  }) {

  function hundleDelete(){
    onDelete();
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={hundleDelete}>X</button>
    </div>
  );
}

export default Task;