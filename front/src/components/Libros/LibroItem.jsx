import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
  } from "@mui/material";
  import { Link } from "react-router-dom";

  const LibroItem = ({ titulo, autor, postUrl, id }) => {
    return (
      <Card
        sx={{
          margin: 2,
          width: 250,
          height: 350,
          borderRadius: 5,":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        <img height={"60%"} width="100%" src={postUrl} alt={titulo} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={"center"}>
            {autor}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            fullWidth
            LinkComponent={Link}
            to={`/booking/${id}`}
            sx={{
              margin: "auto",
              bgcolor: "#ff7f50",
              ":hover": {
                bgcolor: "#121217",
              },
            }}
            size="small"
          >
            Ver más
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default LibroItem;