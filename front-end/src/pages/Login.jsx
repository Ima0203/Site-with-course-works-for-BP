import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()

    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'Airat')
        navigate(-1)
    }

    return (
        <div>
            <h1>Страница для входа</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин st"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;