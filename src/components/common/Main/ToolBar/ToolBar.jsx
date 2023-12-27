import {SearchForm} from "../../Forms/SearchForm";
import {IconButton} from "../../UI/IconButton";
import {MoonIcon, PlusIcon, SunIcon} from "../../../../assets";
import {useAddTask, useTheme} from "../../../../core/hooks";
import classes from "./ToolBar.module.css";
import {Select} from "../../UI/Select";
import {Task, TasksFilter} from "../../../../core/models";
import {v4 as uuid4} from "uuid";
import {useState} from "react";
import {InputModal} from "../../UI/Modals";

export const ToolBar = (props) => {
    const {
        style,
        filter,
        setFilter
    } = props;

    const { theme, toggleTheme } = useTheme();
    const { addTask } = useAddTask();
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);

    const themeIcon = theme === "light" ? MoonIcon : SunIcon;

    return (
        <>
            <div className={classes.toolbar} style={style}>
                {showAddTaskModal && <InputModal
                    title={"New task"}
                    inputPlaceholder={"Input your task..."}
                    onApply={(title) => {
                        addTask(new Task(uuid4(), title, false));
                        setShowAddTaskModal(false);
                    }}
                    onCancel={() => setShowAddTaskModal(false)}
                />}
                <SearchForm
                    value={filter ? filter.title : ""}
                    onChange={(title) => {
                        setFilter(new TasksFilter(title, filter.isCompleted));
                    }}
                />
                <Select
                    data={[
                        {value:"all"},
                        {value:"complete"},
                        {value:"incomplete"}
                    ]}
                    value={filter ? filter.getOptionByStatus() : "all"}
                    onChange={(option) => {
                        const newFilter = new TasksFilter(filter.title)
                        switch (option) {
                            case "complete":
                                newFilter.isCompleted = true;
                                break;
                            case "incomplete":
                                newFilter.isCompleted = false;
                                break;
                            default:
                                newFilter.isCompleted = null;
                        }
                        setFilter(newFilter);
                    }}
                />
                <IconButton
                    icon={themeIcon}
                    iconStyle={{width:38, height:38}}
                    onClick={toggleTheme}
                />
                {props.children}
            </div>
            <IconButton
                icon={PlusIcon}
                className={classes.addButton}
                iconStyle={{width:50, height:50}}
                onClick={() => setShowAddTaskModal(true)}
            />
        </>
    );
};
