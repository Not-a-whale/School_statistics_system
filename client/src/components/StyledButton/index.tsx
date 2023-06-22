import classes from "./index.module.scss";
import {useTheme} from "@mui/material";

export const StyledButton = ({ text, onClickHandler, styles }) => {
    const theme: any = useTheme();
    return <button
        type="submit"
        className={classes.btn}
        onClick={onClickHandler ? onClickHandler : () => {}}
        style={styles}
    >{text}</button>
}
