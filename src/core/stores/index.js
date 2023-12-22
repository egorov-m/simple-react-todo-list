import {createContext, useEffect, useState} from "react";

export const StoreContext = createContext({});


const StoreProvider = ({ children }) => {
    const initTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const [tasks, setTasks] = useState(initTasks);
    useEffect(
        () => {
            localStorage.setItem("tasks", JSON.stringify(tasks));
            },
        [tasks]
    );
    const addTask = (task) => { setTasks([...tasks, task]); };
    const deleteTask = (id) => { setTasks(tasks.filter(task => task.id !== id)); };
    const updateTask = (id, updatedTask) => {
        setTasks(tasks.map(task => task.id === id ? updatedTask : task));
    };
    const getFilteredTasks = (title, isCompleted) => {
        // setTasks(filteredTasks);
        title = title.trim();
        return tasks.filter(task => {
            let filter = true;
            if (title !== "") {
                filter &&= task.title.toLowerCase().includes(title.toLowerCase());
            }
            if (isCompleted !== null && isCompleted !== undefined) {
                filter &&= task.isCompleted === isCompleted;
            }
            return filter;
        });
    };

    return (
        <StoreContext.Provider
            value={{ addTask, deleteTask, updateTask, getFilteredTasks }}>
            {children}
        </StoreContext.Provider>
    );
}


export default StoreProvider;
