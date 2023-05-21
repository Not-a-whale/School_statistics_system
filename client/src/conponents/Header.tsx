import classes from './Header.module.scss';
import {Box, Button, Divider, Drawer, IconButton, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useState} from "react";

const Header = () => {

    const [open, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState(open);
    }


    return (
        <>
            <header className={classes.header}>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
            </header>

        </>
    )
}

export default Header;
