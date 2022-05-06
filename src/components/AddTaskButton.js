import { useState } from "react"

const AddTaskButton = ({ onAdd }) => {
    const [text, setText] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert("Please add a task")
        } else

        onAdd({ text })
        setText("")
    }
  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="Task" value={text} onChange={(e) => setText(e.target.value)} />
        <input type="submit" value="Add Task" className="btn" />
    </form>
  )
}

export default AddTaskButton