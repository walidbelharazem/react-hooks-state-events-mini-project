import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function handleDeleteTask (newTaskList) {
    setTasks(newTaskList);
  };

  function handleTaskFormSubmit (newTask){
    setTasks([...tasks, newTask]);
  };


  function handleCategoryChange(category){
    
    setSelectedCategory(category);
    if (category === "All") {
      setTasks(TASKS); 
    } else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
    
      setTasks(filteredTasks);
    }
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}  />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;