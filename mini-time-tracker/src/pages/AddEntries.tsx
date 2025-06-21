import { useState } from "react"
import "../css/AddEntries.css"

function handleClick(taskName: string,hoursWorked: number,setTasks : Function) {
    console.log("task name: ",taskName)
    console.log("hours worked: ",hoursWorked)
    setTasks ((prev:[]) => [...prev, {name: taskName, hours: hoursWorked}])
}

export const AddEntries = () => {

    const [tasks,setTasks] = useState([])
    const [taskName, setTaskName] = useState("")
    const [hoursWorked, setHoursWorked] = useState(0)

    const handleClear = () =>{
        setTaskName("");
        setHoursWorked(0);
    }

    return(
        <div className="add-container">
            <div className="input-div">
                <h2>Task Name:</h2>
                <input 
                type="text" 
                placeholder="Enter work task name..." 
                name="taskName" 
                id="task-name" 
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                />
            </div>
            <div className="input-div">
                <h2>Hours Worked:</h2>
                <input 
                type="number" 
                placeholder="Enter hours worked..."
                name="hoursWorked" 
                id="hours-worked" 
                value={hoursWorked}
                onChange={(e) => setHoursWorked(Number(e.target.value))}
                 />
            </div>
            
            <div className="button-div">
                <button className="clear-btn" onClick={handleClear} >Clear</button>
                <button className="add-task-btn" onClick={() => {handleClick(taskName,hoursWorked,setTasks)}}>Add Task</button>
            </div>
        </div>
        
    )
}