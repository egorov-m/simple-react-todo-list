import React from "react";

import classes from "./NotFoundPage.module.css";
import {EmptyDarkIcon, EmptyLightIcon} from "../../../assets";
import {useDocumentTitle} from "../../../core/hooks";
import {Image} from "../../common/UI/Image";
import {useTheme} from "../../../core/hooks";
import {Text} from "../../common/UI/Text";

const NotFoundPageComponent = (props) => {

    useDocumentTitle("Not found - ToDo");

    const { theme } = useTheme();

    return (
        <div className={classes.main_container}>
            <Image
                alt={"Not found image"}
                src={theme === "light" ? EmptyLightIcon : EmptyDarkIcon}
                className={classes.image}
            />
            <Text className={classes.text} tag={"h1"}>Not Found</Text>
        </div>
    );
};

export const NotFoundPage = NotFoundPageComponent;
