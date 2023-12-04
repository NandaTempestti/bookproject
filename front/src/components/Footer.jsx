import React from "react";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material"
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <Box position="sticky" sx={{ bgcolor: "#ff7f50" }}>
                <Box
                    margin="auto"
                    marginTop={5}
                    display={"flex"}
                    flexDirection="row"
                    padding={5}
                    justifyContent="space-around">

                    <div className="sb__footer-links-div">
                        <h4> Contacto</h4>
                        <p> Email: librosdespertar@test.com </p>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Nuestros Sitios</h4>
                        <Box >
                            <IconButton>
                                <BsFacebook />
                                <BsInstagram />
                            </IconButton>
                        </Box>

                    </div>


                </Box>

            </Box>
        </>

    );
};
export default Footer;