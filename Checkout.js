import React, { useState, useContext } from "react";

import CssBaseline from "@mui/material/CssBaseline";

import AppBar from "@mui/material/AppBar";

import Box from "@mui/material/Box";

import Container from "@mui/material/Container";

import Toolbar from "@mui/material/Toolbar";

import Paper from "@mui/material/Paper";

import Stepper from "@mui/material/Stepper";

import Step from "@mui/material/Step";

import StepLabel from "@mui/material/StepLabel";

import Button from "@mui/material/Button";

import Link from "@mui/material/Link";

import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import AddressForm from "./AddressForm";

import PaymentForm from "./PaymentForm";

import Review from "./Review";

import axios from "axios";

import SuccessfulSubmit from "./SuccessfulSubmit";

//import { modelNames } from "mongoose";

import SignIn from "./SignIn";

import { Form } from "react-router-dom";

import passport from "../images/image1.jpg"




import { LoginContext } from "../Contexts/LoginContext";

// const [data, setData] = useState({});

function getStepContent(step) {
  // let allData1={};
  // let allData2 ={}
  // let allData3 = {}
  // let finalData ={}
  // const pullData1 = (data1)=>{
  //   allData1 = Object.assign(allData1,data1)
  //   console.log(allData1)
  //   Object.assign(finalData,allData1)
  // }
  // console.log(finalData['personal_details'] = allData1)
  // const pullData2 =(data2) =>{
  //    allData2 = {data2}
  //   console.log(allData2)
  //   Object.assign(finalData,allData2)
  // }
  // finalData['family_details'] = allData2.data2
  // const pullData3 =(data3)=>{
  //   allData3 = {data3}
  //   console.log(allData3)
  //   Object.assign(finalData,allData3)
  //   // finalData['address_details'] = allData3.data3
  //   console.log({finalData})
  // }
}

const theme = createTheme();

export default function Checkout() {
  // const {registereduser} = useContext(LoginContext)

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    first_name: "",

    last_name: "",

    DOB: "",

    email: "",

    birth_place: "",

    gender: "",

    state: "",

    district: "",

    maritial_status: "",

    PAN: "",

    employement_type: "",

    qualification: "",

    father_name: "",

    surname: "",

    mother_name: "",

    surnames: "",

    house_no: "",

    street: "",

    city: "",

    pincode: "",
  });

  // const [userid,setUserid] = useState(registereduser._id)

  const FormFilled = async (e) => {
    const {
      first_name,

      last_name,

      DOB,

      email,

      birth_place,

      gender,

      state,

      district,

      maritial_status,

      PAN,

      employement_type,

      qualification,

      father_name,

      surname,

      mother_name,

      house_no,

      street,

      city,

      pincode,
    } = data;

    e.preventDefault();

    // console.log(userid)

    try {
      const url = "http://localhost:4002/api/v1/form/new";

      await axios

        .post(url, {
          first_name,

          last_name,

          DOB,

          email,

          birth_place,

          gender,

          state,

          district,

          maritial_status,

          PAN,

          employement_type,

          qualification,

          father_name,

          surname,

          mother_name,

          surname,

          house_no,

          street,

          city,

          pincode,

          // userid
        })

        .then(async (res) => {
          const userId = localStorage.getItem("id");

          alert("submitted successfully");

          console.log(res);

          const response = await axios.patch(
            `http://localhost:4002/api/v1/users/${userId}`,

            { form_id: res.data.form._id }
          );

          console.log(res.data.form._id);

          console.log(response);

          localStorage.setItem("form", res.data.form._id);

          // window.location = "/successfulSubmit"
        });
    } catch (error) {
      console.log(error);
    }
  };

  // const step = [" Applicant Details", "Family Details", "Resedential Address"];
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Applicant Details', 'Family Detalis', 'Address Detalis']

  function getStepContent(steps) {
    switch (steps) {
      case 0:
        return <AddressForm data={data} setData={setData} />;
      case 1:
        return <PaymentForm data={data} setData={setData} />;
      case 2:
        return <Review data={data} setData={setData} />;
      case 3:
      // return <ReferenceDetails data={data} setData={setData} />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    console.log(data)
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{
        backgroundImage: `url(${passport})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: "100vh",
        backgroundSize: "100% 100%",
      }}>
        <div style={{
          paddingTop: "20px"
        }}>
          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper elevation={12} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, borderRadius: "14px" }}>
              <Typography component="h1" variant="h4" align="center">
                Application Form
              </Typography>
              <Box sx={{
                overflow: 'auto'
              }}>
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <SuccessfulSubmit />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}

                    <Button
                      type="submit"
                      variant="contained"
                      onClick={(e) => {
                        if (activeStep == steps.length - 1) {
                          alert("Form submitted");

                          console.log(data);
                          setActiveStep((page) => page + 1);
                          FormFilled(e);
                        } else {
                          setActiveStep((page) => page + 1);
                        }
                      }} sx={{ mt: 3, ml: 1 }}
                    >
                      {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Paper>

          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}
