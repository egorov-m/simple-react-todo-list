export class TasksFilter {
    constructor(title, isCompleted) {
        this.title = title ? title.trim().toLowerCase() : "";
        this.isCompleted = isCompleted;
    }

    check(item) {
        let filter = true;
        if (this.title !== "") {
            filter &&= item.title.toLowerCase().includes(this.title);
        }
        if (this.isCompleted !== null && this.isCompleted !== undefined) {
            filter &&= item.isCompleted === this.isCompleted;
        }
        return filter;
    }

    getOptionByStatus() {
        if (this.isCompleted === undefined || this.isCompleted === null) {
            return "all";
        } else if (this.isCompleted) {
            return "complete";
        } else {
            return "incomplete";
        }
    }
}