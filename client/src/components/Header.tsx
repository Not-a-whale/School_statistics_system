import classes from './Header.module.scss';
import {AppBar, Box, Button, CardMedia, InputBase, Menu, MenuItem, Toolbar, Typography, useTheme} from "@mui/material";
import {
    Menu as MenuIcon,
    Search,
    DarkModeOutlined,
    LightModeOutlined,
    SettingsOutlined,
    ArrowDropDownOutlined
} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import FlexBetween from "./FlexBetween";
import IconButton from "@mui/material/IconButton";
import {useState} from "react";
import logo from "../assets/images/main_logo.png"
import {setSidebar} from "../state";

const Header = () => {
    const dispatch = useDispatch();
    const theme: any = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event: any) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <AppBar sx={{
            position: 'static',
            width: "100%",
            background: theme.palette.secondary[100]
        }}
        className={classes.header}
        >
            <Toolbar sx={{
                justifyContent: 'space-between',
                width: "100%",
            }}>
                <FlexBetween>
                    <IconButton onClick={() => {dispatch(setSidebar())}}
                                sx={{
                                    margin: "0 1rem 0 -0.75rem",
                                }}>
                        <MenuIcon />
                    </IconButton>
                </FlexBetween>
                <FlexBetween>
                    <FlexBetween gap="1.5rem">
                        <IconButton onClick={() => {dispatch(setSidebar())}}>
                            {theme.palette.mode === "dark" ? <LightModeOutlined
                                sx={{
                                    fontSize: "25px"
                                }}
                            /> : <DarkModeOutlined
                                sx={{
                                    fontSize: "25px"
                                }}/>}
                        </IconButton>
                    </FlexBetween>
                    <Button
                        onClick={handleClick}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            textTransform: "none",
                            marginLeft: "1.5rem",
                            gap: "1rem",
                        }}>
                        <Box
                            component="img"
                            src={'profileImage'}
                            alt="profile"
                            height="32px"
                            width="32px"
                            borderRadius="50%"
                            sx={{
                                objectFit: "cover",
                            }}
                        />
                        <Box textAlign="left">
                            <Typography
                                fontWeight="bold"
                                fontSize="0.85rem"
                                sx={{ color: theme.palette.secondary[100] }}
                            >
                                "Nikita Kornienko"
                            </Typography>
                            <Typography
                                fontSize="0.75rem"
                                sx={{ color: theme.palette.secondary[200] }}
                            >
                                "Front-end Developer"
                            </Typography>
                        </Box>
                        <ArrowDropDownOutlined
                            sx={{
                                color: theme.palette.secondary[300],
                                fontSize: "25px",
                            }}
                        />
                    </Button>
                    <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} >
                        <MenuItem onClick={handleClose}>Log out</MenuItem>
                    </Menu>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
