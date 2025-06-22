
import "../css/AddEntries.css"
import { useTasks } from "../context/Context"

/*
    *optionally add timer function
*/

export const AddEntries = () => {

    const {
        setTasks,
        taskName,
        setTaskName,
        hoursWorked,
        setHoursWorked,
    } = useTasks();

    const handleClear = () =>{
        setTaskName("");
        setHoursWorked("");
    }

    function handleClick() {

    const newTask = {
        id: crypto.randomUUID(),
        name: taskName,
        hours: Number(hoursWorked)
    }

    if(!taskName || !hoursWorked){
        alert("Please fill out all field in the form!")
        return;
    }

    setTasks((prev) => [...prev, newTask])
    handleClear();
}

    return(
        <div className="add-container">
            <div className="input-div">
                <h2>Task Name:</h2>
                <input 
                type="text"
                required
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
                required
                placeholder="Enter hours worked..."
                name="hoursWorked" 
                id="hours-worked" 
                value={hoursWorked}
                onChange={(e) => setHoursWorked(e.target.value)}
                 />
            </div>

            <div className="button-div">
                <button className="clear-btn" onClick={handleClear} >Clear</button>
                <button className="add-task-btn" onClick={() => {handleClick()}}>Add Task</button>
            </div>
        </div>
        
    )
}