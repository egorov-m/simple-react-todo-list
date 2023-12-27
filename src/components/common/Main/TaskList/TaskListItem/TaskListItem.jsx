import classes from "./TaskListItem.module.css";
import {Text} from "../../../UI/Text";
import {IconButton, JsIconButton} from "../../../UI/IconButton";
import {CheckboxSelectedIcon} from "../../../UI/Icons";
import {CheckboxUnSelectedIcon} from "../../../UI/Icons/Checkbox/CheckboxIcon";
import {BasketIcon, PencilIcon} from "../../../../../assets";
import {InputModal} from "../../../UI/Modals";
import {useState} from "react";
import {ConfirmModal} from "../../../UI/Modals/ConfirmModal";
import {useDeleteTask, useUpdateTasks} from "../../../../../core/hooks";
import {Task} from "../../../../../core/models";

export const TaskListItem = (props) => {
    const {
        data
    } = props

    const { updateTask } = useUpdateTasks();
    const { deleteTask } = useDeleteTask();
    const [showEditTaskModal, setShowEditTaskModal] = useState(false);
    const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false);

    const icon = data.isCompleted ? CheckboxSelectedIcon : CheckboxUnSelectedIcon;

    const titleClasses = data.isCompleted ? classes.title + " " + classes.title_strikethrough : classes.title;

    return (
        <li className={classes.item}>
            {showEditTaskModal && <InputModal
                title={"Edit task"}
                value={data.title}
                inputPlaceholder={"Input your task..."}
                onApply={(title) => {
                    updateTask(data.id, new Task(data.id, title, data.isCompleted));
                    setShowEditTaskModal(false);
                }}
                onCancel={() => setShowEditTaskModal(false)}
            />}
            {showDeleteTaskModal && <ConfirmModal
                title={"Delete task?"}
                onConfirm={() => {
                    deleteTask(data.id);
                    setShowDeleteTaskModal(false);
                }}
                onCancel={() => setShowDeleteTaskModal(false)}
            />}
            <JsIconButton
                Icon={icon}
                iconStyle={{width:26, height:26}}
                buttonStyle={{marginRight:17}}
                onClick={() => {
                    updateTask(data.id, new Task(data.id, data.title, !data.isCompleted))
                }}
            />
            <Text className={titleClasses}>{data.title}</Text>
            <IconButton
                icon={PencilIcon}
                isHidden={true}
                iconStyle={{width:18, height:18, stroke:"var(--faded)"}}
                buttonStyle={{marginRight:10}}
                onClick={() => setShowEditTaskModal(true)}
            />
            <IconButton
                icon={BasketIcon}
                isHidden={true}
                iconStyle={{width:18, height:18, stroke:"var(--faded)"}}
                onClick={() => setShowDeleteTaskModal(true)}
            />
        </li>
    );
};
