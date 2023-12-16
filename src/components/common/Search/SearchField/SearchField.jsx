import {useState} from "react";
import classes from "./SearchField.module.css";

export const SearchField = (props) => {
    const {
        onSubmit,
        placeholder,
        style
    } = props;
    const [searchText, setSearchText] = useState("");

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchText);
    };

    return (
        <input className={classes.input} style={style} placeholder={placeholder}/>
    );
}