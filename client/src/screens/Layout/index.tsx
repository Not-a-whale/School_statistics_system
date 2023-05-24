import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import {useSelector} from "react-redux";

const Layout = (props) => {
/*    const isNonMobile = useMediaQuery('(min-width: 600px)');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const userId = useSelector((state) => state.global.userId);
    useSelector((state) => console.log('state', state.global.userId));
    const { data } = useGetUserQuery(userId);
    console.log('data', data);*/
    const open = useSelector((state: any) => state.global.isSidebarOpen);

    return <Box
/*        display={isNonMobile ? "flex" : "block"}
        width="100%"
        height="100%"*/
    >
        <Sidebar
            open={open}
/*            user={data}
            data={data || {}}
            isNoneMobile={isNonMobile}
            drawerWidth={240}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}*/
        />
        <Box flexGrow={1}>
            <Header />
            <Outlet />
        </Box>
    </Box>
};

export default Layout;
