import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function InputAdornments() {
  return (
    <Box>
      <div style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Calcule seu IMC:
        </Typography>
        <Typography gutterBottom>
          E tenha uma vida mais feliz, disposta e saudável!
        </Typography>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">m</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "Altura",
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">
            Altura
          </FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "Peso",
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">Peso</FormHelperText>
        </FormControl>
        <Button variant="outlined" style={{ width: "100px" }}>
          Calcular
        </Button>
      </div>
    </Box>
  );
}
