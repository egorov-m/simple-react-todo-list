import classes from "./Modal.module.css";
import {Text} from "../Text";
import {InputForm} from "../../Forms/InputForm";

export const InputModal = (props) => {
    const {
        title,
        value,
        inputPlaceholder,
        onApply,
        onCancel
    } = props;

    return (
        <div className={classes.modal_overlay}>
            <div className={classes.modal_content}>
                <Text className={classes.modal_title}>{title}</Text>
                <InputForm
                    inputPlaceholder={inputPlaceholder}
                    value={value}
                    onSubmit={onApply}
                    onCancel={onCancel}
                />
            </div>
        </div>
    );
};
