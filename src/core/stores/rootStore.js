import {TaskStore} from "./taskStore";

export class RootStore {
    constructor() {
        this.taskStore = new TaskStore()
    }
}