import {useDocumentTitle, useStores, useTheme} from "../../../core/hooks";
import classes from "./HomePage.module.css";
import {Text} from "../../common/UI/Text";
import {TaskList, ToolBar} from "../../common/Main";
import {EmptyDarkIcon, EmptyLightIcon} from "../../../assets";
import {Image} from "../../common/UI/Image";
import React, {useEffect, useState} from "react";

const HomePageComponent = (props) => {
    useDocumentTitle("Home - ToDo");

    const { theme } = useTheme();

    const [filter, setFilter] = useState({title: "", status: null});
    const { getFilteredTasks } = useStores();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const filteredTasks = getFilteredTasks(filter.title, filter.status);
        setTasks(filteredTasks);
    }, [filter, getFilteredTasks]);

    return (
        <div className={classes.main_container}>
            <Text className={classes.title}>TODO LIST</Text>
            <ToolBar
                style={{"margin-top": 18}}
                filter={filter}
                setFilter={setFilter}
            />
            {Array.isArray(tasks) && tasks.length > 0 ? (
                <TaskList data={tasks} style={{"margin-top":30}}/>
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
