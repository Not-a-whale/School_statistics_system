import {Outlet} from "react-router-dom";
import {Box, Container, useMediaQuery} from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import {useSelector} from "react-redux";
import {SideNav} from "../../components/SideNav";
import classes from "./index.module.scss";

const Layout = (props) => {
    const isNonMobile = useMediaQuery('(min-width: 600px)');
    const open = useSelector((state: any) => state.global.isSidebarOpen);
    const { userInfo } = useSelector((state) => state?.auth);
    return <Box
        className={classes.layout}
        display={isNonMobile ? 'flex' : 'block'}
        >
        {userInfo &&
            <SideNav
                drawerWidth={240}
                isNoneMobile={isNonMobile}
                open={open}
            />}
        <Box
            flexGrow={1}
        >
            {userInfo && <Header />}
            <Outlet />
            </Box>
    </Box>

    /*<div
        className={classes.layout}
    >
        {userInfo &&
            <SideNav
                drawerWidth={240}
                isNoneMobile={isNonMobile}
                open={open}
            />}
        <div
            className={classes.content}
        >
            {userInfo && <Header />}
            <Outlet />
        </div>
    </div>*/
};

export default Layout;
