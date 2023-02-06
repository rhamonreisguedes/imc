import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardComponent from "./CardComponent";

type Props = {

};

const IBCTable = ( props: Props) => {
  return (
    <Grid
      container
      style={{ display: "flex", alignItems: "center" }}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={12} md={5}>
        <CardComponent
          color={"#FFEE63"}
          title={"Menor que 18,5"}
          text={"Magreza"}
        ></CardComponent>
      </Grid>
      <Grid item xs={12} md={5}>
        <CardComponent
          color={"#D4D925"}
          title={"Entre 18,5 e 24,9"}
          text={"Normal"}
        ></CardComponent>
      </Grid>
      <Grid item xs={12} md={5}>
        <CardComponent
          color={"#FF5B00"}
          title={"Entre 25 e 29,9"}
          text={"Sobrepeso"}
        ></CardComponent>
      </Grid>
      <Grid item xs={12} md={5}>
        <CardComponent
          color={"#990000"}
          title={"Acima de 30"}
          text={"Obesidade"}
        ></CardComponent>
      </Grid>
    </Grid>
  );
};

export default IBCTable;
