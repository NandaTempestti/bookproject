import React from "react";
import {useNavigate} from "react-router-dom";
import { useDispatch }  from "react-redux";
import LoginForm from "./LoginForm";
import  {sendUserLoginRequest}  from "../../api/api";
import { userActions } from "../../store"

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onResReceived = (data) => {
        console.log(data);
        dispatch(userActions.login())
        localStorage.setItem("userId", data.id)
        navigate("/");

    }
    const getData = (data) =>{
        console.log("Login", data);
        sendUserLoginRequest(data.inputs, data.signup)
        .then(onResReceived)
        .catch(err => console.log(err))
    };
    return (
        <div>
            <LoginForm onSubmit={getData} isAdmin = {false}/>
        </div>
    )
};

export default Login;