import React from "react";
import classes from "./MainLayout.module.css";

import {Header} from "../Header"

const MainLayoutComponent = (props) => {
    return (
        <div className={classes.main_container}>
            <Header />
            <main className={classes.main_block}>
                {props.children}
            </main>
        </div>
    )
}

export const MainLayout = MainLayoutComponent;
