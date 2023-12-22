import {InputField} from "../../UI/InputField";
import classes from "./SearchForm.module.css";
import {IconButton} from "../../UI/IconButton";
import {MagnifierIcon} from "../../../../assets";

export const SearchForm = (props) => {
    const {
        onChange
    } = props;

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <InputField
                style={{"flex-grow": 1}}
                placeholder={"Search note..."}
                onSubmit={handleSubmit}
                onChange={handleChange}
            />
            <IconButton
                icon={MagnifierIcon}
                iconStyle={{width:21, height:21, fill: "var(--border)"}}
                buttonStyle={{"margin-left":-37}} />
        </form>
    )
};
