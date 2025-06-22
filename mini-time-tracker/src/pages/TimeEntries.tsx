import { useEffect } from "react";
import { useTasks } from "../context/Context"
import "../css/TimeEntries.css"


export const TimeEntries = () => {

    const {
        tasks,
        setTasks,
        totalHours,
        setTotalHours,
    } = useTasks();

    useEffect(() => {
        const total = tasks.reduce((sum, task) => sum + task.hours, 0)
        setTotalHours(total);
    }, [tasks, setTotalHours])

    const deleteTask = (taskId : string) => {
        const newTasks = tasks.filter((task) => task.id !== taskId)
        setTasks(newTasks)
    }

    return(
        <div className="time-entries-container">
            <div className="tasks-heading">
                <h1>Entries: {tasks.length}</h1>
            </div>
            <div className="entries-main">
                {tasks.map((task) => (
                    <div className="task-card" key={task.id}>
                        <p className="task-details">{task.name}</p>
                        <p className="task-details">Hours: {task.hours}</p>
                        <button className="delete-task" onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                ))}
            </div>
            <div className="total-div">
                <p>Total Hours: {totalHours}</p>
            </div>
        </div>
        
    )
}