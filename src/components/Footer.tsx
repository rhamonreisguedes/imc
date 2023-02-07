import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "@mui/material/Link";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <Box
      sx={{ width: "100%", marginTop: "20px" }}
      style={{
        marginTop: "auto",
        backgroundColor: "#ff6666",
        minHeight: "40px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography mt={1}>Calculadora IMC © Direitos Reservados</Typography>
    </Box>
  );
}
