import { useState } from "react";
import Header from "./components/Header";
import AddTaskButton from "./components/AddTaskButton";
import Tasks from "./components/Tasks";


function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: "Walk Alex"
  }])

  const addTask = (task) => {
    const id = tasks.length + 1

    const newTask = { id, ...task}
    setTasks([...tasks, newTask])

}
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div>
      <Header h2text="My lonely todo list" h3text="Click on a task to delete it"/>
      <AddTaskButton onAdd={addTask}/>
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
