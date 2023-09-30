import React from "react";
import { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[1]);

function handleSubmit (e) {
e.preventDefault();

  const newTask = {
    text: taskText,
    category: selectedCategory,
  };

  onTaskFormSubmit(newTask);

setTaskText("");
setSelectedCategory(categories[1]);

}


  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={(e) => setTaskText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category"  value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((category,index)=>{
            if(category !== "All"){
              return (
              <option key={index} value={category}>{category}</option>
            )}})}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;