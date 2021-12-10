import React, {useContext} from 'react';
import BootstrapInput from "../../components/UI/Input/BootstrapInput";
import {AuthContext} from "../../context";
import BootstrapButton from "../../components/UI/Button/BootstrapButton";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className={"container mt-3"}>
            <form>
                <BootstrapInput name={"email"}
                                label={"Email address"}
                                description={"We'll never share your email with anyone else."}/>
                <BootstrapInput name={"password"}
                                type={"password"}
                                label={"Password"}/>
                <BootstrapButton type="submit" className="btn-primary" onClick={login}>Submit</BootstrapButton>
            </form>
        </div>
    );
};

export default Login;