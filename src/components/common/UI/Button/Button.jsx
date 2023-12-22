import classes from "./Button.module.css";


export const Button = (props) => {
    const {
        buttonType,
        text,
        className,
        buttonStyle,
        isOutline,
        onClick
    } = props;

    const baseClassName = isOutline ? classes.outline_button : classes.button;

    return (
        <button
            type={buttonType ?? "button"}
            className={classes.base + " " + baseClassName + " " + className}
            style={buttonStyle}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
