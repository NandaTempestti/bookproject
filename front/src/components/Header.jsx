import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Autocomplete, IconButton,Tab, Tabs, TextField, Toolbar } from "@mui/material"
import { BsBookmarkHeart } from "react-icons/bs";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { getAllBooks } from "../api/api";
import { adminActions, userActions } from "../store";


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
    const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const [value, setValue] = useState();
    const [books, setBooks] = useState([]);
    const [selectedBook, setselectedBook] = useState();
    useEffect(() => {
        getAllBooks()
            .then((data) => setBooks(data.books))
            .catch((err) => console.log(err));
    }, []);

    const logout = (isAdmin) => {
        dispatch(isAdmin ? adminActions.logout() : userActions.logout())

    }
    const handleChange = (e, val) => {
        const book = books.find((b) => b.titulo === val);
        console.log(book);
        if (isUserLoggedIn) {
          navigate(`/booking/${book._id}`);
        }
      };

    return (
        <>
            <AppBar position="sticky"
                sx={{ bgcolor: "#ff7f50" }} >
                <Toolbar>
                    <Box >
                        <IconButton LinkComponent={Link} to="/" >
                            <BsBookmarkHeart /> 
                        </IconButton>
                    </Box>
                    <Box width={"30%"} margin={"auto"}>
                        <Autocomplete
                            onChange={handleChange}
                            freeSolo
                            options={books && books.map((option) => option.titulo)}
                            renderInput={(params) => (

                                <TextField
                                    sx={{ input: { color: "white" } }}
                                    variant="standard"
                                    {...params}
                                    placeholder="Buscar" />
                            )}
                        />
                    </Box>
                    <Box display={'flex'}>
                        <Tabs
                            textColor="inherit"
                            indicatorColor="primary"
                            value={value}
                            onChange={(e, val) => setValue(val)}>

                            <Tab LinkComponent={Link} to="/libros" label="Libros" />
                            {!isAdminLoggedIn && !isUserLoggedIn && (
                                <>
                                    <Tab label="Admin" LinkComponent={Link} to="/admin" />
                                    <Tab label="Login" LinkComponent={Link} to="/login" />
                                </>
                            )}
                            {isUserLoggedIn && (
                                <>
                                    <Tab
                                        onClick={() => logout(false)}
                                        label="Logout"
                                        LinkComponent={Link} to="/" />
                                </>
                            )}
                            {isAdminLoggedIn && (
                                <>
                                    <Tab label="Agregar Libro" LinkComponent={Link} to="/add" />
                                    <Tab
                                        onClick={() => logout(true)}
                                        label="Logout"
                                        LinkComponent={Link} to="/" />

                                </>
                            )}

                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
};

export default Header;