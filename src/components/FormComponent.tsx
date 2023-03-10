import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";

export default function InputAdornments() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [ibc, setIbc] = useState(0);
  const [empty, setEmpty] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = useState("");
  const [status, setStatus] = useState("");
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
    } else if (height === "0" || weight === "0") {
      setEmpty(true);
    } else {
      const num_height: number = parseFloat(height.replace(",", "."));
      const num_weight: number = parseFloat(weight);
      if (Number.isNaN(num_height) || Number.isNaN(num_weight)) {
        setEmpty(true);
      } else {
        const ibc: number = num_weight / (num_height * num_height);
        setIbc(ibc);
        if (empty === true) {
          setEmpty(false);
        }
        handleOpen();
      }
    }
  };

  useEffect(() => {
    if (ibc < 18.5) {
      setColor("#ef9b20");
      setStatus("Magreza");
    } else if (ibc >= 18.5 && ibc < 25) {
      setColor("#ede15b");
      setStatus("Normal");
    } else if (ibc >= 25 && ibc < 30) {
      setColor("#f46a9b");
      setStatus("Sobrepeso");
    } else {
      setColor("#ea5545");
      setStatus("Obesidade");
    }
  }, [ibc]);

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
    backgroundColor: `${color}`,
    textAlign: "center",
  };

  return (
    <Box mt={3}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Descubra seu IMC:
        </Typography>
        <Typography gutterBottom>
          E tenha uma vida mais feliz, disposta e saud??vel!
        </Typography>
        <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleHeight(e)}
        >
          <OutlinedInput
            id="outlined-adornment-weight"
            placeholder="Ex: 1,63"
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
            placeholder="Ex: 65"
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
            style={{ width: "100px" }}
            onClick={calculate}
            variant="contained"
          >
            Calcular
          </Button>
        </Typography>
        {empty ? (
          <Typography style={{ color: "red", fontSize: "bold" }}>
            Altura ou Peso possuem valores nulos e/ou inv??lidos.
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
          <Box sx={style} style={{}}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Seu IMC ??:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {ibc.toFixed(2)}
            </Typography>
            <Typography>Seu Status ??: {status}</Typography>
          </Box>
        </Modal>
      </div>
    </Box>
  );
}
