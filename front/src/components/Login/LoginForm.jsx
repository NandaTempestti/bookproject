import React, { useState } from "react";
import {
    Box,
    Button,
    Dialog,
    FormLabel,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { BsFileExcel } from "react-icons/bs";


const labelStyle = { mt: 1, mb: 1 };

const LoginForm = ({ onSubmit, isAdmin }) => {

    const [inputs, setInputs] = useState({
        nombre: "",
        email: "",
        password: "",
    });

    const [isSignup, setIsSignup] = useState(false);

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ inputs, signup: isAdmin ? false : isSignup });
    };

    return (
        <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>

            <Box sx={{ ml: "auto", padding: 1 }}>
                <IconButton LinkComponent={Link} to="/">
                    <BsFileExcel />
                </IconButton>
            </Box> 
            <Typography variant="h4" textAlign={"center"}>
                {isSignup ? "Signup" : "Login"}
            </Typography>

            <form onSubmit={handleSubmit}>
                <Box
                    padding={6}
                    display={"flex"}
                    justifyContent={"center"}
                    flexDirection="column"
                    width={400}
                    margin="auto"
                    alignContent={"center"}
                >
                    {!isAdmin && isSignup && (
                        <>
                            {" "}
                            <FormLabel sx={labelStyle}>Nombre</FormLabel>
                            <TextField
                                value={inputs.name}
                                onChange={handleChange}
                                margin="normal"
                                variant="standard"
                                type={"text"}
                                name="nombre"
                            />
                        </>
                    )}
                    <FormLabel sx={labelStyle}>Email</FormLabel>
                    <TextField
                        value={inputs.email}
                        onChange={handleChange}
                        margin="normal"
                        variant="standard"
                        type={"email"}
                        name="email"
                    />
                    <FormLabel sx={labelStyle}>Contraseña</FormLabel>
                    <TextField
                        value={inputs.password}
                        onChange={handleChange}
                        margin="normal"
                        variant="standard"
                        type={"password"}
                        name="password"
                    />
                    <Button
                        sx={{ mt: 2, borderRadius: 10, bgcolor: "#ff7f50" }}
                        type="submit"
                        fullWidth
                        variant="contained"
                    >
                        {isSignup ? "Signup" : "Login"}
                    </Button>
                    {!isAdmin && (
                        <Button
                            onClick={() => setIsSignup(!isSignup)}
                            sx={{ mt: 2, borderRadius: 10 }}
                            fullWidth
                        >
                           {isSignup ? "Login" : "Registrarse"}
                        </Button>
                    )}
                </Box>
            </form>
        </Dialog>
    );
};

export default LoginForm;