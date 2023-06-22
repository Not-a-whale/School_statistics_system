import classes from './Header.module.scss';
import {AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography, useTheme} from "@mui/material";
import {
    Menu as MenuIcon,
    DarkModeOutlined,
    LightModeOutlined,
    ArrowDropDownOutlined
} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import FlexBetween from "./FlexBetween";
import IconButton from "@mui/material/IconButton";
import {useState} from "react";
import {setSidebar} from "../state";

const Header = () => {
    const dispatch = useDispatch();
    const theme: any = useTheme();
    const { userInfo } = useSelector((state: any) => state.auth);
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event: any) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <AppBar sx={{
            position: 'static',
            width: "96%",
            margin: "0 auto",
            background: theme.palette.secondary[100],
            boxShadow: theme.mainBoxShadow
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
                            src="https://scontent-iev1-1.xx.fbcdn.net/v/t31.18172-8/28619614_1735832159800170_8498795598189168794_o.jpg?_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RSeHq5Vz8D4AX96T5jn&_nc_ht=scontent-iev1-1.xx&oh=00_AfCQDvg9BpfI6IYCE8BWlhQHO6z6tDww8I1hRz2w06lVKQ&oe=64BB5288"
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
                                fontSize="1rem"
                                sx={{ color: theme.palette.primary[1000] }}
                            >
                                {userInfo.name}
                            </Typography>
                            <Typography
                                fontSize="0.75rem"
                                sx={{ color: theme.palette.primary[1000] }}
                            >
                                Студент
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
