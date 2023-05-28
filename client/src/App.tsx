import './App.css'
import Layout from "./screens/Layout";
import {useEffect, useMemo} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import {themeSettings} from "./theme";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";



function App() {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const { userInfo } = useSelector((state: any) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            navigate('/dashboard');
        } else {
            navigate('/login');
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

