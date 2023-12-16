import {useDocumentTitle, useTheme} from "../../../core/hooks";
import classes from "./HomePage.module.css";
import {Text} from "../../common/UI/Text";
import {TaskList, ToolBar} from "../../common/Main";
import {Task} from "../../../core/models";

const HomePageComponent = (props) => {
    useDocumentTitle("Home - ToDo");

    const { theme, toggleTheme } = useTheme();

    const tasks = [
        new Task(1, "Task 1", "Description 1", true),
        new Task(2, "Task 2", "Description 2", true),
        new Task(3, "Task 3", "Description 3", false),
        new Task(4, "Task 4", "Description 4", true),
        new Task(5, "Task 5", "Description 5", false),
    ];

    return (
        <div className={classes.main_container}>
            <Text className={classes.title}>TODO LIST</Text>
            <ToolBar style={{"margin-top": 18}}/>
            <TaskList data={tasks} style={{"margin-top":30}}/>
        </div>
    );
};

export const HomePage = HomePageComponent;
