import classes from './Header.module.scss';
import {IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useDispatch} from "react-redux";
import {setSidebar} from "../state";

const Header = () => {
    const dispatch = useDispatch();

    return (
        <>
            <header className={classes.header}>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => dispatch(setSidebar())}>
                    <MenuIcon />
                </IconButton>
            </header>

        </>
    )
}

export default Header;
