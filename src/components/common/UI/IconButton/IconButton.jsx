import classes from "./IconButton.module.css";
import {ReactSVG} from "react-svg";

export const IconButton = (props) => {
    const {
        icon,
        iconStyle,
        isHidden,
        className,
        buttonStyle,
        onClick
    } = props;

    const baseClassName = isHidden ? classes.button + " " + classes.button_hidden : classes.button;

    return (
        <button
            type={"button"}
            className={baseClassName + " " + className}
            style={buttonStyle}
            onClick={onClick}
        >
            <ReactSVG src={icon} style={iconStyle}/>
        </button>
    )
};

export const JsIconButton = (props) => {
    const {
        Icon,
        iconStyle,
        buttonStyle,
        onClick
    } = props;
    return (
        <button
            type={"button"}
            className={classes.button}
            style={buttonStyle}
            onClick={onClick}
        >
            <Icon style={iconStyle}/>
        </button>
    )
};
