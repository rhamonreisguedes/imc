import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import FormComponent from "../components/FormComponent";
import IBCTable from "../components/IBCTable";

type Props = {};

const Home = (props: Props) => {
  return (
    <Grid
      style={{
        textAlign: "center",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <FormComponent />
        </Grid>
        <Grid item xs={12} md={6}>
          <IBCTable />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
