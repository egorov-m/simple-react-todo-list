import classes from "./TaskListItem.module.css";
import {Text} from "../../../UI/Text";
import {IconButton, JsIconButton} from "../../../UI/IconButton";
import {CheckboxSelectedIcon} from "../../../UI/Icons";
import {CheckboxUnSelectedIcon} from "../../../UI/Icons/Checkbox/CheckboxIcon";
import {BasketIcon, PencilIcon} from "../../../../../assets";

export const TaskListItem = (props) => {
    const {
        data,
        ...others
    } = props

    const icon = data.isCompleted ? CheckboxSelectedIcon : CheckboxUnSelectedIcon;

    return (
        <li className={classes.item}>
            <JsIconButton
                Icon={icon}
                iconStyle={{width:26, height:26}}
                buttonStyle={{"margin-right":17}}
            />
            <Text className={classes.title}>{data.title}</Text>
            <IconButton
                icon={PencilIcon}
                isHidden={true}
                iconStyle={{width:18, height:18, stroke:"var(--faded)"}}
                buttonStyle={{"margin-right":10,}}
            />
            <IconButton
                icon={BasketIcon}
                isHidden={true}
                iconStyle={{width:18, height:18, stroke:"var(--faded)"}}
            />
        </li>
    );
};
