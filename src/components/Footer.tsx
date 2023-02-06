import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export default function Footer() {
  return (
    <Box sx={{ width: "100%" }} style={{marginTop: "auto", backgroundColor: 'gray', minHeight: '53px', textAlign: 'center'}} mt={2}>
      <Typography>Corpo Feliz - Direitos Reservados</Typography>
    </Box>
  );
}
