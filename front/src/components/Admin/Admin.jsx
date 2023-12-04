import React from "react";
import { useDispatch }  from "react-redux";
import LoginForm from "../Login/LoginForm";
import {sendAdminLoginRequest} from "../../api/api";
import {adminActions } from "../../store"

const Admin = () => {
    const dispatch = useDispatch();
    const onResReceived = (data) => {
        console.log(data);
        dispatch(adminActions.login())
        localStorage.setItem("adminId", data.id);
        localStorage.setItem("token", data.token)
    }

    const getData = (data) => {
        console.log("Admin" , data);
        sendAdminLoginRequest(data.inputs)
        .then(onResReceived)
        .catch((err) => console.log(err));
    }
    return (
        <div>
            <LoginForm onSubmit={getData} isAdmin = {true} />
        </div>
    )
};

export default Admin;