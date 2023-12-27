import {QUERY_KEY} from "../../constants";
import {TasksFilter} from "../models";

export const localStorageThemeService = {
    setValue: (value) => {
        return new Promise((resolve, reject) => {
            localStorage.setItem(QUERY_KEY.theme, value)
            resolve();
        });
    },
    getValue: () => {
        return new Promise((resolve, reject) => {
            const savedValue = localStorage.getItem(QUERY_KEY.theme);
            const theme = savedValue || "light";
            document.documentElement.setAttribute("data-theme", theme);
            resolve(theme);
        });
    }
};

export const localStorageTasksService = {
    setValue: (value) => {
        return new Promise((resolve, reject) => {
            localStorage.setItem(QUERY_KEY.tasks, JSON.stringify(Array.isArray(value) ? value : []))
            resolve();
        });
    },
    getValue: () => {
        return new Promise((resolve, reject) => {
            const savedValue = localStorage.getItem(QUERY_KEY.tasks);
            resolve(!savedValue ? [] : JSON.parse(savedValue));
        });
    }
};

export const localStorageTasksFilterService = {
    setValue: (value) => {
        return new Promise((resolve, reject) => {
            localStorage.setItem(
                QUERY_KEY.tasksFilter,
                JSON.stringify(value || new TasksFilter())
            );
            resolve();
        });
    },
    getValue: () => {
        return new Promise((resolve, reject) => {
            const savedValue = localStorage.getItem(QUERY_KEY.tasksFilter);
            let value;
            if (savedValue) {
                const parseValue = JSON.parse(savedValue);
                value = new TasksFilter(parseValue.title, parseValue.isCompleted);
            } else {
                value = new TasksFilter()
            }
            resolve(value);
        });
    }
};
