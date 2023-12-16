import {SearchForm} from "../../Search/SearchForm";
import {IconButton} from "../../UI/IconButton";
import {MoonIcon, PlusIcon, SunIcon} from "../../../../assets";
import {useTheme} from "../../../../core/hooks";
import classes from "./ToolBar.module.css";
import {Select} from "../../UI/Select";

export const ToolBar = (props) => {
    const{
        style,
        ...other
    } = props;

    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? MoonIcon : SunIcon;

    return (
        <>
            <div className={classes.toolbar} style={style}>
                <SearchForm />
                <Select
                    data={[
                        {value:"all"},
                        {value:"complete"},
                        {value:"incomplete"}
                    ]}
                />
                <IconButton
                    icon={themeIcon}
                    iconStyle={{width:38, height:38}}
                    onClick={toggleTheme}
                />
                {props.children}
            </div>
            <IconButton
                icon={PlusIcon}
                className={classes.addButton}
                iconStyle={{width:50, height:50}}
            />
        </>
    )
};
