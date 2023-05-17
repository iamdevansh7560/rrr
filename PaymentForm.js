import React, { useState } from "react";

import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";

import FormControlLabel from "@mui/material/FormControlLabel";

import Checkbox from "@mui/material/Checkbox";

export default function PaymentForm({ data, setData }) {
  // props.func2({faname,laname,moname,lasname})

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Family Details
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} mt={5}>
          <Typography>Father Name</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="FFName"
            label="First Name"
            fullWidth
            onChange={(e) => setData({ ...data, father_name: e.target.value })}
            value={data.father_name}

          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="FLName"
            label="Last Name"
            fullWidth
            onChange={(e) => setData({ ...data, surname: e.target.value })}
            value={data.surname}

          />
        </Grid>
        <Grid item xs={12} mt={5}>
          <Typography>Mother Name</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            onChange={(e) => setData({ ...data, mother_name: e.target.value })}
            value={data.mother_name}
            id="MFName"
            label="First Name"
            fullWidth

          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            onChange={(e) => setData({ ...data, surnames: e.target.value })}
            value={data.surnames}
            id="MLName"
            label="Last Name"
            fullWidth

          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
