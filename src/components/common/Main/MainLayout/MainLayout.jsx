import React from "react";
import classes from "./MainLayout.module.css";

import {Header} from "../Header"

const MainLayoutComponent = (props) => {
    return (
        <dic className={classes.main_container}>
            <Header />
            <main className={classes.main_block} {...props}>
                {props.children}
            </main>
        </dic>
    )
}

export const MainLayout = MainLayoutComponent;
