import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import  {getAllBooks}  from "../../api/api";
import LibroItem from "./LibroItem"

const Libros = () => {
    const [books, setBooks] = useState();
    useEffect(() => {
    getAllBooks()
      .then((data) => setBooks(data.books))
      .catch((err) => console.log(err));
  }, []);

    return (
        <Box margin={"auto"} marginTop={4}>
            <Typography
                margin={"auto"}
                variant="h4"
                padding={2}
                width="40%"
                bgcolor={"#cd853f"}
                color="white"
                textAlign={"center"}
            >
                Todos los libros
            </Typography>
            <Box
                width={"100%"}
                margin="auto"
                marginTop={5}
                display={"flex"}
                justifyContent="flex-start"
                flexWrap={"wrap"}
            >
                {books && books.map((book, index) => (
                        <LibroItem
                            key={index}
                            id={book._id}
                            postUrl={book.postUrl}
                            titulo={book.titulo}
                            autor={book.autor}                           
                        />
                    ))}
            </Box>
        </Box>
    )

};

export default Libros;