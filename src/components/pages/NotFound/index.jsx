import React, {Fragment, useEffect} from "react";

import classes from "./NotFoundPage.module.css";
import {EmptyDarkIcon, EmptyLightIcon} from "../../../assets";
import {useDisclosure, useDocumentTitle} from "../../../core/hooks";
import {Image} from "../../common/UI/Image";
import {useTheme} from "../../../core/hooks";
import {Text} from "../../common/UI/Text";

const NotFoundPageComponent = (props) => {

    const [loaderVisible, {open: loaderToggle}] = useDisclosure(false);
    useDocumentTitle("Not found - ToDo");

    useEffect(() => {
        setTimeout(() => loaderToggle(), 100)
    }, []);

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classes.main_container}>
            {loaderVisible && <Fragment>
                <Image
                    alt={"Not found image"}
                    src={theme === "light" ? EmptyLightIcon : EmptyDarkIcon}
                    className={classes.image}
                />
                <Text className={classes.text} tag={"h1"}>Not Found</Text>
            </Fragment>}
        </div>
    );
};

export const NotFoundPage = NotFoundPageComponent;
