import {Task} from "../models";

export class TaskStore {
    constructor() {
        this.tasks = []
    }

    addTask = (task) => {
        this.tasks.push(task)
    }

    updateStateTask = (taskId, isCompleted) => {
        const task = this.getTask(taskId)
        task.isCompleted = isCompleted
    }

    deleteTask = (taskId) => {
        const index = this.tasks.findIndex(obj => obj.id === taskId);
        if (index !== -1) {
            this.tasks.splice(index, 1)
        }
    }

    getTasks = () => this.tasks

    getTask = (taskId) => this.tasks.find(obj => obj.id === taskId)
}