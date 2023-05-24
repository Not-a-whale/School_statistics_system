import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {CssBaseline} from "@mui/material";
import Layout from "./screens/Layout";
import Dashboard from "./screens/Dashboard";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <CssBaseline />
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

