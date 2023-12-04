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
import { BsFileExcel } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminActions } from "../../store/admin-slice";


const labelSx = { marginRight: "auto", mt: 1, mb: 1 };

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const onClose = () => {
    setOpen(false);
    navigate("/");
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onRequestSent = (val) => {
    localStorage.removeItem("userId");
    localStorage.setItem("adminId", val.id);
    localStorage.setItem("token", val.token);
    dispatch(adminActions.login());
    setOpen(false);
    navigate("/");
  }; 

  
  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={open}>
      <Box sx={{ ml: "auto", padding: 1 }}>
        <IconButton LinkComponent={Link} to="/">
          <BsFileExcel />
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign={"center"}>
        {"Login"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          alignItems={"center"}
          width={400}
          padding={6}
          margin="auto"
          display="flex"
          flexDirection={"column"}
        >
          <FormLabel sx={labelSx}>Email</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputs.email}
            name="email"
            type="email"
            variant="standard"
            fullWidth
            margin="normal"
            placeholder="Email"
          />
          <FormLabel sx={labelSx}>Password</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputs.password}
            name="password"
            type={"password"}
            variant="standard"
            fullWidth
            margin="normal"
            placeholder="Password"
          />
          <Button
            sx={{ borderRadius: 10, mt: 2, bgcolor: "#2b2d42" }}
            type="submit"
            fullWidth
            variant="contained"
          >
            {"Login"}
          </Button>
        </Box>
      </form>
    </Dialog>
  );
};

export default AdminLogin;