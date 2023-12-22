import {InputField} from "../../UI/InputField";
import classes from "./InputForm.module.css";
import {Button} from "../../UI/Button";
import {useState} from "react";

export const InputForm = (props) => {
    const {
        value,
        inputPlaceholder,
        onSubmit,
        onCancel
    } = props;

    const [inputText, setInputText] = useState(value ?? "");

    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputText);
    };

    return (
        <form
            onSubmit={handleSubmit}
        >
            <InputField
                className={classes.modal_input_field}
                value={value}
                placeholder={inputPlaceholder}
                onChange={handleChange}
            />
            <Button
                buttonType={"submit"}
                text={"apply"}
                className={classes.modal_button + " " + classes.confirm_button}
            />
            <Button
                text={"cancel"}
                isOutline={true}
                className={classes.modal_button + " " + classes.cancel_button}
                onClick={onCancel}
            />
        </form>
    )
};
