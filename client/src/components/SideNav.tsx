import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton, List, ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Typography,
    useTheme
} from "@mui/material";
import classes from "./SideNav.module.scss";
import {useDispatch} from "react-redux";
import {logout} from "../state/authSlice";
import logo from "../assets/images/main_logo.png";
import {
    AdminPanelSettingsOutlined,
    CalendarMonthOutlined,
    ChevronRightOutlined,
    Groups2Outlined,
    HomeOutlined, PieChartOutlined, PointOfSaleOutlined, PublicOutlined,
    ReceiptLongOutlined,
    ShoppingCartOutlined, TodayOutlined, TrendingUpOutlined
} from "@mui/icons-material";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import Diversity1Icon from "@mui/icons-material/Diversity1";

const navItems = [
    {
        name: "Дашборд",
        text: "dashboard",
        icon: <HomeOutlined />,
    },
    {
        name: "Студенти",
        text: "Students",
        icon: <Groups2Outlined />,
    },
    {
        name: "Іноземці",
        text: "foreigners",
        icon: <Diversity1Icon />,
    },
];

export const SideNav = ({ drawerWidth, isNoneMobile, open }: any) => {
    const dispatch = useDispatch();
    const theme: any = useTheme();
    const location: any = useLocation();
    const path = location.pathname.split('/')[1];


    const logoutHandler = () => {
        dispatch(logout());
    }

    const returnLogoHtml = () => {
        return 'Edu Stats Tracker'.split("").map((char, i) => <span style={{'transform': `rotate(${i * 19}deg)`}}>{char}</span>);
    }

    const [active, setActive] = useState(path);
    const navigate = useNavigate();

    return (
        <Box
            style={{
                background: theme.palette.secondary[100],
                color: theme.palette.primary[1000],
                boxShadow: theme.mainBoxShadow
            }}
        >
            {open && (<div
                style={{
                    width: drawerWidth,
                    background: theme.palette.secondary[100],

                }}
                className={classes.sidebar}
            >
                <div className={classes.sidebarIcon}>
                    <div
                        className={classes.logo}
                        style={{
                            backgroundImage: `url(${logo})`,
                            }}
                    ></div>
                    <div className={classes.text}>
                        {returnLogoHtml()}
                    </div>
                </div>

                <Divider sx={{ width: '100%', mt: 3, mb: 1 }} />

                <Box sx={{ mb: 2, pl: 2, width: '100%' }}>
                    <List>
                        {navItems.map(({ text, icon, name }) => {
                            if (!icon) {
                                return (
                                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                                        {text}
                                    </Typography>
                                );
                            }
                            const lcText = text.toLowerCase();

                            return (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton
                                        onClick={() => {
                                            navigate(`/${lcText}`);
                                            setActive(lcText);
                                        }}
                                        sx={{
                                            backgroundColor:
                                                active === lcText
                                                    ? theme.palette.secondary[300]
                                                    : "transparent",
                                            color:
                                                active === lcText
                                                    ? theme.palette.primary[1000]
                                                    : theme.palette.primary[1000],
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                color:
                                                    active === lcText
                                                        ? theme.palette.primary[600]
                                                        : theme.palette.primary[1000],
                                            }}
                                        >
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={name} />
                                        {active === lcText && (
                                            <ChevronRightOutlined sx={{ ml: "auto" }} />
                                        )}
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
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
