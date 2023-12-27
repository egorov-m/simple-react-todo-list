import classes from "./Select.module.css";

export const Select = (props) => {
    const {
        value,
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
                    key={item.value}
                    value={item.value}
                    selected={item.value === value}
                >
                    {item.value}
                </option>
            )}
        </select>
    )
};
