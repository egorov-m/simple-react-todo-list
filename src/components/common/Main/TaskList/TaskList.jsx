import classes from "./TaskList.module.css";
import {TaskListItem} from "./TaskListItem";

export const TaskList = (props) => {
    const {
        data,
        style,
        ...others
    } = props;
    return (
        <ul className={classes.list} style={style}>
            {data.map(item => {
                return (
                    <TaskListItem data={item}/>
                )
            })}
        </ul>
    );
};
