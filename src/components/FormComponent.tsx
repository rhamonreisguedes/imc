import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ModalComponent from "./ModalComponent";

export default function InputAdornments() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
    console.log(height);
  };

  const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
    console.log(weight);
  };

  const calculate = () => {
    const num_height: number = parseFloat(height.replace(',', '.'));
    const num_weight: number = parseFloat(weight);
    const ibc: number = num_weight / (num_height * num_height);
    console.log(`Seu IMC é ${ibc.toFixed(2)}`);
  };

  return (
    <Box>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Calcule seu IMC:
        </Typography>
        <Typography gutterBottom>
          E tenha uma vida mais feliz, disposta e saudável!
        </Typography>
        <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleHeight(e)}
        >
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

        <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleWeight(e)}
        >
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
        <Button
          variant="outlined"
          style={{ width: "100px" }}
          onClick={calculate}
        >
          Calcular
        </Button>
      </div>
    </Box>
  );
}
