import classes from "./Select.module.css";

export const Select = (props) => {
    const {
        data
    } = props
    return (
        <select className={classes.select}>
            {data.map(
                item => <option
                    className={classes.option}
                    value={item.value}
                >
                    {item.value}
                </option>
            )}
        </select>
    )
};