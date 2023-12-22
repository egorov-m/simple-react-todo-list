import classes from "./SearchField.module.css";


export const InputField = (props) => {
    const {
        value,
        placeholder,
        className,
        style,
        onSubmit,
        onChange,
    } = props;

    return (
        <input
            className={className + " " + classes.input}
            defaultValue={value ?? ""}
            style={style} placeholder={placeholder}
            onSubmit={onSubmit}
            onChange={onChange}
        />
    );
};
