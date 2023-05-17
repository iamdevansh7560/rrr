import React from "react";

import Typography from "@mui/material/Typography";

import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Container } from "@mui/system";

import { Paper } from "@mui/material";

import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";

const SuccessfulSubmit = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <React.Fragment>
            <Typography component="h1" variant="h4" align="center">
              Successfully Submitted
            </Typography>

            <Typography variant="subtitle1" sx={{ pt: 5, pb: 3 }}>
              You have successfully submitted your application
            </Typography>
          </React.Fragment>

          <Grid cursor="pointer" container justifyContent="flex-end">
            <Grid>
              <Link cursor="pointer" to={"/"}>
                Go to Dashboard
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default SuccessfulSubmit;
