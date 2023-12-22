import classes from "./ConfirmForm.module.css";
import {Button} from "../../UI/Button";

export const ConfirmForm = (props) => {
    const {
        onConfirm,
        onCancel
    } = props;

    return (
        <form>
            <Button
                buttonType={"submit"}
                text={"confirm"}
                className={classes.modal_button + " " + classes.confirm_button}
                onClick={onConfirm}
            />
            <Button
                text={"cancel"}
                isOutline={true}
                className={classes.modal_button + " " + classes.cancel_button}
                onClick={onCancel}
            />
        </form>
    );
};
