import React from "react";
import classes from "./Header.module.css"

const HeaderComponent = (props) => {
    return (
        <header className={classes.main} {...props}>
            {props.children}
        </header>
    )
}

export const Header = HeaderComponent;
