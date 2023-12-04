import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../../api/api";
import { Button ,Typography } from "@mui/material";
import { Box } from "@mui/system";

const Booking = () => {
    const [book, setBook] = useState();
    const id = useParams().id;
    console.log(id);

    useEffect(() => {
        getBookDetails(id)
            .then((res) => setBook(res.book))
            .catch((err) => console.log(err));
    }, [id]);
    console.log(book);

    return (

        <>
            <div>
                {book &&
                    <Fragment>
                        <Typography padding={3} fontFamily="sans-serif" variant="h5" textAlign={"center"} >
                            Acerca de {book.titulo}
                        </Typography>
                        <Box display={"flex"} justifyContent={"center"}>
                            <Box
                                display={"flex"}
                                flexDirection="row"
                                justifyContent={"center"}
                                padding={5}
                                paddingTop={3}
                                width="100%"
                                marginRight={"auto"} >
                                <img
                                    width=" 50%"
                                    height={"60%"}
                                    src={book.postUrl}
                                    alt={book.titulo} />
                                <Box
                                    width={"40%"}
                                    marginTop={3}
                                    padding={5} >
                                        <Typography paddingTop={2} > 
                                            <h3> {book.autor}</h3>
                                            <p>{book.descripcion} </p> 
                                        </Typography>
                                        <Button type="submit" sx={{ mt: 3, borderRadius: 10, bgcolor: "#ff7f50"}}>
                                            Descargar
                                        </Button>
                                </Box>
                            </Box>

                        </Box>

                    </Fragment>}
            </div>
        </>
    )
}

export default Booking;