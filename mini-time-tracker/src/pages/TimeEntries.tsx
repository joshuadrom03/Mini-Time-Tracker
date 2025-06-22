import { useEffect } from "react";
import { useTasks } from "../context/Context"
import "../css/TimeEntries.css"

/*
    TODO: Add edit button to each task
    TODO: Add delete btn to every task
    *optionally add timer functionality
*/

export const TimeEntries = () => {

    const {
        tasks,
        totalHours,
        setTotalHours,
    } = useTasks();

    useEffect(() => {
        const total = tasks.reduce((sum, task) => sum + task.hours, 0)
        setTotalHours(total);
    }, [tasks, setTotalHours])

    return(
        <div className="time-entries-container">
            <div className="tasks-heading">
                <h1>Entries: {tasks.length}</h1>
            </div>
            <div className="entries-main">
                {tasks.map((task) => (
                    <div className="task-card" key={task.name}>
                        <p className="task-details">{task.name}</p>
                        <p className="task-details">Hours: {task.hours}</p>
                        <button className="delete-task">Delete</button>
                        <button className="edit-task">Edit</button>
                    </div>
                ))}
            </div>
            <div className="total-div">
                <p>Total Hours: {totalHours}</p>
            </div>
        </div>
        
    )
}