import classes from "./index.module.scss";
import {useTheme} from "@mui/material";

export const StyledButton = ({ text, onClickHandler, styles }) => {
    const theme: any = useTheme();
    console.log({...styles});
    return <button
        type="submit"
        className={classes.btn}
        onClick={onClickHandler ? onClickHandler : () => {}}
        style={styles}
    >{text}</button>
}
