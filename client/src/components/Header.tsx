import classes from './Header.module.scss';
import {IconButton, useTheme} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useDispatch} from "react-redux";
import {setSidebar} from "../state";

const Header = () => {
    const dispatch = useDispatch();
    const theme: any = useTheme();

    return (
        <>
            <header
                className={classes.header}
                   style={{
                          backgroundColor: theme.palette.secondary[10]
                       }
                   }
            >
{/*                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => dispatch(setSidebar())}
                >
                    <MenuIcon
                        sx={{
                            color: theme.palette.primary[1000],
                        }}
                    />
                </IconButton>*/}
            </header>

        </>
    )
}

export default Header;
