import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useTheme
} from "@mui/material";
import classes from "./SideNav.module.scss";
import {setSidebar} from "../state";
import CloseIcon from "@mui/icons-material/Close";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GradingIcon from "@mui/icons-material/Grading";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import {useDispatch} from "react-redux";
import {logout} from "../state/authSlice";
import logo from "../assets/images/main_logo.png";

export const SideNav = ({ drawerWidth, isNoneMobile, open }: any) => {
    const dispatch = useDispatch();
    const theme: any = useTheme();


    const logoutHandler = () => {
        dispatch(logout());
    }
    return (
        <Box
            style={{
                height: '100vh',
                background: theme.palette.secondary[10],
                color: theme.palette.primary[1000],
            }}
        >
            {open && (<div
                style={{
                    width: drawerWidth,
                    background: theme.palette.secondary[10],
                }}
                className={classes.sidebar}
            >
                <div className={classes.sidebarIcon}>
                    <img className={classes.main_logo} src={logo} alt="main logo"/>
                </div>

                <Divider sx={{ mb: 2 }} />

                <Box sx={{ mb: 2 }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <PeopleAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Студенти" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <GradingIcon />
                        </ListItemIcon>
                        <ListItemText primary="Успішність" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <RecordVoiceOverIcon />
                        </ListItemIcon>
                        <ListItemText primary="Викладачі" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <Diversity1Icon />
                        </ListItemIcon>
                        <ListItemText primary="Іноземці" />
                    </ListItemButton>
                </Box>
                <Box
                >
                    <Button
                        variant="outlined"
                        sx={{ m: 1, width: 0.5 }}
                        onClick={logoutHandler}
                    >
                        Logout
                    </Button>
                </Box>
            </div>)
            }
        </Box>

    )
}
