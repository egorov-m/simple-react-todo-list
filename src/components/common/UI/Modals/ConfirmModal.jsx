import classes from "./Modal.module.css";
import {Text} from "../Text";
import {ConfirmForm} from "../../Forms/ConfirmForm";

export const ConfirmModal = (props) => {
    const {
        title,
        onConfirm,
        onCancel
    } = props;

    return (
        <div className={classes.modal_overlay}>
            <div className={classes.modal_content}>
                <Text className={classes.modal_title}>{title}</Text>
                <ConfirmForm
                    onConfirm={onConfirm}
                    onCancel={onCancel}
                />
            </div>
        </div>
    );
};
