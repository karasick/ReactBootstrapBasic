import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router";
import {AuthContext} from "../context";
import InlineLoader from "./UI/Loader/InlineLoader";

const AppRouter = () => {
    const {isAuth, setIsAuth, isStart} = useContext(AuthContext);

    if(isStart) {
        return (
            <InlineLoader/>
        )
    }

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map((route, index) =>
                    <Route exact={route.exact} path={route.path} element={route.element} key={index}/>
                )}
            </Routes>
            : <Routes>
                {publicRoutes.map((route, index) =>
                    <Route exact={route.exact} path={route.path} element={route.element} key={index}/>
                )}
            </Routes>
    );
};

export default AppRouter;