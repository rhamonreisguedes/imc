import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import React from 'react'
import FormComponent from '../components/FormComponent'
import IBCTable from '../components/IBCTable'

type Props = {}

// const dataTable = [
//   { color: "gray", title: "x", text: "xxxxxx" },
//   { color: "gray", title: "x", text: "xxxxxx" },
//   { color: "gray", title: "x", text: "xxxxxx" },
//   { color: "gray", title: "x", text: "xxxxxx" },
// ];


const Home = (props: Props) => {
  return (
    <Grid style={{textAlign: 'center', minHeight: "82vh"}} >
      <Typography variant="h3" gutterBottom mt={4} mb={6}>Corpo Feliz</Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <FormComponent />
          </Grid>
          <Grid item xs={12} md={6}>
            <IBCTable />
          </Grid>
        </Grid>
    </Grid>
  )
}

export default Home