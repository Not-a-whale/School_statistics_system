import './App.css'
import Layout from "./screens/Layout";
import {useEffect, useMemo} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import {themeSettings} from "./theme";
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";



function App() {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const { userInfo } = useSelector((state: any) => state.auth);
    const navigate = useNavigate();
    const location: any = useLocation();
    const path = location.pathname.split('/')[1];

    useEffect(() => {
        if (!path) {
           navigate('/dashboard');
        }
    }, []);
    return (
        <>
            <ThemeProvider theme={theme}>
                <Layout />
            </ThemeProvider>
        </>
    );
}

export default App;

