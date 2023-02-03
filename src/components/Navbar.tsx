import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item>
              <Typography>Corpo Feliz</Typography>
            </Grid>
            <Grid item style={{ display: "flex", right:'0px' }}>
              <Link
                to="/"
                style={{
                  marginRight: "10px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <Typography>Home</Typography>
              </Link>
              <Link
                to="/"
                style={{
                  marginRight: "10px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <Typography>Sobre Nós</Typography>
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <Typography>Contato</Typography>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
