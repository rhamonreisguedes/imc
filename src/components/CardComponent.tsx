import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

interface ICard {
  color: string;
  title: string;
  text: string;
}

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

export default function CardComponent({ color, title, text }: ICard) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card style={{ backgroundColor: `${color}` }}>
        <CardContent>
          <Typography variant="h6">IMC: {title}</Typography>
          <Typography variant="h6" mt={2} mb={2}>
            Status: {text}
          </Typography>
          <Typography mb={1}>
            <Button onClick={handleOpen}>Saiba Mais</Button>
          </Typography>
        </CardContent>
      </Card>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              EM BREVE
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Dietas e Exercícios personalizados ao seu IMC e estilo de vida!
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}
