import {SearchField} from "../SearchField";
import classes from "./SearchForm.module.css";
import {IconButton} from "../../UI/IconButton/IconButton";
import {MagnifierIcon} from "../../../../assets";

export const SearchForm = (props) => {
    return (
        <form className={classes.form}>
            <SearchField style={{"flex-grow": 1}} placeholder={"Search note..."} />
            <IconButton
                icon={MagnifierIcon}
                iconStyle={{width:21, height:21, fill: "var(--border)"}}
                buttonStyle={{"margin-left":-37}} />
        </form>
    )
};