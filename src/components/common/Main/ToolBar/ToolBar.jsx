import {SearchForm} from "../../Forms/SearchForm";
import {IconButton} from "../../UI/IconButton";
import {MoonIcon, PlusIcon, SunIcon} from "../../../../assets";
import {useStores, useTheme} from "../../../../core/hooks";
import classes from "./ToolBar.module.css";
import {Select} from "../../UI/Select";
import {Task} from "../../../../core/models";
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
    const { addTask } = useStores();
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
                    onChange={(title) => {
                        setFilter({title: title, status: filter.status});
                    }}
                />
                <Select
                    data={[
                        {value:"all"},
                        {value:"complete"},
                        {value:"incomplete"}
                    ]}
                    onChange={(option) => {
                        const newFilter = {title: filter.title}
                        switch (option) {
                            case "complete":
                                newFilter.status = true;
                                break;
                            case "incomplete":
                                newFilter.status = false;
                                break;
                            default:
                                newFilter.status = null;
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
