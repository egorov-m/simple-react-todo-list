import classes from "./Select.module.css";

export const Select = (props) => {
    const {
        data,
        onChange
    } = props

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };

    return (
        <select className={classes.select} onChange={handleSelectChange}>
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
