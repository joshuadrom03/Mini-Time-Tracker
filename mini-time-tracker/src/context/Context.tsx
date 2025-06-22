import { createContext, useContext, useState, type ReactNode, } from "react";

type Task = {
    id: string;
    name: string;
    hours: number;
}

interface TaskContextType {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    taskName: string;
    setTaskName: React.Dispatch<React.SetStateAction<string>>;
    hoursWorked: string;
    setHoursWorked: React.Dispatch<React.SetStateAction<string>>;
    totalHours: number;
    setTotalHours: React.Dispatch<React.SetStateAction<number>>;
}

const TaskContext = createContext<TaskContextType | null>(null);

interface TaskProviderProps {
    children: ReactNode;
}

export const TaskProvider = ({children}: TaskProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskName, setTaskName] = useState("");
    const [hoursWorked, setHoursWorked] = useState("");
    const [totalHours, setTotalHours] = useState(0);

    return(
        <TaskContext.Provider value={{
        tasks, 
        setTasks, 
        taskName, 
        setTaskName, 
        hoursWorked, 
        setHoursWorked, 
        totalHours, 
        setTotalHours}}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTasks = () => {
    const context = useContext(TaskContext);
    if(!context) {
        throw new Error("Must be used within a taskprovider")
    }
    return context
} 