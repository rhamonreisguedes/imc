import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardComponent from "./CardComponent";

type Props = {};

const IBCTable = (props: Props) => {
  return (
    <Grid
      container
      style={{ display: "flex", alignItems: "center" }}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={12} md={5}>
        <CardComponent color={'gray'} title={'x'} text={'xxxxx'}></CardComponent>
      </Grid>
      <Grid item xs={12} md={5}>
        <CardComponent color={'gray'} title={'x'} text={'xxxxx'}></CardComponent>
      </Grid>
      <Grid item xs={12} md={5}>
        <CardComponent color={'gray'} title={'x'} text={'xxxxx'}></CardComponent>
      </Grid>
      <Grid item xs={12} md={5}>
        <CardComponent color={'gray'} title={'x'} text={'xxxxx'}></CardComponent>
      </Grid>
    </Grid>
  );
};

export default IBCTable;
