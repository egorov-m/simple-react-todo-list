import classes from "./CheckboxIcon.module.css";

export const CheckboxSelectedIcon = (props) => {
    const {
        style,
        ...others
    } = props;
    return (
        <div  className={classes.checkbox + " " + classes.checkbox_selected} style={style}>
            <div className={classes.marker} />
        </div>
    )
};

export const CheckboxUnSelectedIcon = (props) => {
    const {
        style,
        ...others
    } = props;
    return (
        <div  className={classes.checkbox} style={style} />
    )
};
