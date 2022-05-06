const Task = ({ task, onDelete }) => {
  return (
    <h3 style={{cursor: "pointer"}}onClick={() => onDelete(task.id)}>{task.text}</h3>
  )
}

export default Task