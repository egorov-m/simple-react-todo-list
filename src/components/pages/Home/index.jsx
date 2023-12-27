import {useDocumentTitle, useTasks, useTasksFilter, useTheme} from "../../../core/hooks";
import classes from "./HomePage.module.css";
import {Text} from "../../common/UI/Text";
import {TaskList, ToolBar} from "../../common/Main";
import {EmptyDarkIcon, EmptyLightIcon} from "../../../assets";
import {Image} from "../../common/UI/Image";
import React from "react";

const HomePageComponent = (props) => {
    useDocumentTitle("Home - ToDo");

    const { theme } = useTheme();

    const {tasksFilter, updateTasksFilter} = useTasksFilter();
    const {tasks} = useTasks(tasksFilter);

    return (
        <div className={classes.main_container}>
            <Text className={classes.title}>TODO LIST</Text>
            <ToolBar
                style={{marginTop: 18}}
                filter={tasksFilter}
                setFilter={updateTasksFilter}
            />
            {Array.isArray(tasks) && tasks.length > 0 ? (
                <TaskList data={tasks} style={{marginTop:30}}/>
            ) : (
                <Image
                    alt={"Empty task list"}
                    src={theme === "light" ? EmptyLightIcon : EmptyDarkIcon}
                    className={classes.image}
                />
            )}
        </div>
    );
};

export const HomePage = HomePageComponent;
