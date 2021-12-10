import React, {useEffect, useState} from 'react';

import "./styles/App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter} from "react-router-dom";
import BootstrapNavbar from "./components/UI/Navbar/BootstrapNavbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

const App = () => {
    const [isStart, setStart] = useState(true)
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setStart(false)
    }, [])

    return (
        <div className="App">
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
                isStart
            }}>
                <BrowserRouter>
                    <BootstrapNavbar/>
                    <AppRouter/>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
};

export default App;