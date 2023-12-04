import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import LibroItem from "./Libros/LibroItem"
import { Link } from "react-router-dom";
import  {getAllBooks} from "../api/api";

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getAllBooks()
            .then((data) => setBooks(data.books))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <Box
                width={"100%"}
                height="100%"
                margin={"auto"}
                marginTop={2} >
                <Box 
                    margin={"auto"} 
                        width="90%" 
                        height={"50%"} 
                        padding={2}>
                    <img
                        src="https://www.wavekup.com/wp-content/uploads/2023/01/Mejores-libros-de-desarrollo-personal-para-jovenes_wavekup.jpg"
                        alt="libros"
                        width={"80%"}
                        height={"40%"}
                        
                    />
                </Box>
                <Box padding={5} margin="auto">
                    <Typography variant="h4" textAlign={"center"}>Libros más leídos</Typography>
                </Box>
                <Box
                    margin={"auto"}
                    display="flex"
                    width="100%"
                    justifyContent={"center"}
                    alignItems="center"
                    flexWrap="wrap">
                    {books && books
                        .slice(0, 4)
                        .map((book, index) => (
                            <LibroItem
                                id={book.id}
                                titulo={book.title}
                                postUrl={book.postUrl}
                                autor={book.autor}
                                key={index}
                            />
                        ))}

                </Box>
                <Box display="flex" padding={5} margin="auto">
                    <Button
                        LinkComponent={Link}
                        to="/libros"
                        variant="outlined"
                        sx={{ margin: "auto", color: "#cd853f" }}
                    >
                        Ver todos los libros
                    </Button>
                </Box>

            </Box>
        </>
    )
};

export default Home;