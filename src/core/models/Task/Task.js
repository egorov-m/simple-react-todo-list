import {v4 as uuid4} from "uuid";

export class Task {
    constructor(id, title, isCompleted) {
        this.id = id || uuid4();
        this.title = title || "task";
        this.isCompleted = isCompleted || false;
    }
}