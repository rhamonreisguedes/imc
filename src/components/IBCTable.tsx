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
      style={{ display: "flex", alignItems: "center", justifyContent:"center" }}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      mb={2}
    >
      <Grid item xs={10} md={5}>
        <CardComponent
          color={"#ef9b20"}
          title={"Menor que 18,5"}
          text={"Magreza"}
        ></CardComponent>
      </Grid>
      <Grid item xs={10} md={5}>
        <CardComponent
          color={"#ede15b"}
          title={"Entre 18,5 e 25"}
          text={"Normal"}
        ></CardComponent>
      </Grid>
      <Grid item xs={10} md={5}>
        <CardComponent
          color={"#f46a9b"}
          title={"Entre 25 e 30"}
          text={"Sobrepeso"}
        ></CardComponent>
      </Grid>
      <Grid item xs={10} md={5}>
        <CardComponent
          color={"#ea5545"}
          title={"Acima de 30"}
          text={"Obesidade"}
        ></CardComponent>
      </Grid>
    </Grid>
  );
};

export default IBCTable;
