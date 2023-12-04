import {
    Box,
    Button,
    Checkbox,
    FormLabel,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { addBook } from "../../api/api";

const labelProps = {
    mt: 1,
    mb: 1,
};
const AgregarLibro = () => {
    const [inputs, setInputs] = useState({
        titulo: "",
        autor: "",
        descripcion: "",
        postUrl: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        addBook({ ...inputs})
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                    width={"50%"}
                    padding={10}
                    margin="auto"
                    display={"flex"}
                    flexDirection="column"
                    boxShadow={"10px 10px 20px #ccc"}
                >
                    <Typography textAlign={"center"} variant="h5" fontFamily={"verdana"}>
                        Agregar Nuevo Libro
                    </Typography>
                    <FormLabel sx={labelProps}>Titulo</FormLabel>
                    <TextField
                        value={inputs.titulo}
                        onChange={handleChange}
                        name="titulo"
                        variant="standard"
                        margin="normal"
                    />
                    <FormLabel sx={labelProps}>Autor</FormLabel>
                    <TextField
                        value={inputs.autor}
                        onChange={handleChange}
                        name="autor"
                        variant="standard"
                        margin="normal"
                    />
                    <FormLabel sx={labelProps}>Descripcion</FormLabel>
                    <TextField
                        value={inputs.descripcion}
                        onChange={handleChange}
                        name="descripcion"
                        variant="standard"
                        margin="normal"
                    />
                    <FormLabel sx={labelProps}>Post Url</FormLabel>
                    <TextField
                        value={inputs.postUrl}
                        onChange={handleChange}
                        name="postUrl"
                        variant="standard"
                        margin="normal"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            width: "30%",
                            margin: "auto",
                            bgcolor: "#ff7f50",
                            ":hover": {
                                bgcolor: "#121217",
                            },
                        }}
                    >
                        Agregar Libro
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default AgregarLibro;