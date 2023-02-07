import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InputAdornments() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [ibc, setIbc] = useState(0);
  const [empty, setEmpty] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
    console.log(height);
  };

  const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
    console.log(weight);
  };

  const calculate = () => {
    if (height === "" || weight === "") {
      setEmpty(true);
    } else {
      const num_height: number = parseFloat(height.replace(",", "."));
      const num_weight: number = parseFloat(weight);
      const ibc: number = num_weight / (num_height * num_height);
      console.log(`Seu IMC é ${ibc.toFixed(2)}`);
      setIbc(ibc);
      if (empty === true) {
        setEmpty(false);
      }
      handleOpen();
    }
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
        <Typography mb={3}>
          <Button
            variant="outlined"
            style={{ width: "100px" }}
            onClick={calculate}
          >
            Calcular
          </Button>
        </Typography>
        {empty ? (
          <Typography style={{ color: "red", fontSize: "bold" }}>
            Altura ou Peso estão incompletos.
          </Typography>
        ) : (
          ""
        )}
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Seu IMC é:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {ibc.toFixed(2)}
            </Typography>
          </Box>
        </Modal>
      </div>
    </Box>
  );
}
