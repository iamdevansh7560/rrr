import React, { useState } from "react";

import Typography from "@mui/material/Typography";

import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";

// const products = [

//   {

//   name: 'Product 1',

//   desc: 'A nice thing',

//   price: '$9.99',

//   },

//   {

//   name: 'Product 2',

//   desc: 'Another thing',

//   price: '$3.45',

//   },

//   {

//   name: 'Product 3',

//   desc: 'Something else',

//   price: '$6.51',

//   },

//   {

//   name: 'Product 4',

//   desc: 'Best thing of all',

//   price: '$14.11',

//   },

//   { name: 'Shipping', desc: '', price: 'Free' },

// ];

export default function Review({ data, setData }) {
  // const [house,setHouse] = useState()

  // const [street,setStreet] = useState()

  // const [city,setCity] = useState()

  // const [states,setStates] = useState()

  // const [pin,setPin] = useState()

  // props.func3({house,street,city,states,pin})

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resedential Address
      </Typography>

      <Grid container spacing={3} mb={2}>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={(e) => setData({ ...data, house_no: e.target.value })}
            value={data.house_no}
            required
            id="house_no"
            label="House No"
            fullWidth
            // variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            onChange={(e) => setData({ ...data, street: e.target.value })}
            value={data.street}
            required
            id="street"
            label="Street"
            fullWidth
            // variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            onChange={(e) => setData({ ...data, city: e.target.value })}
            value={data.city}
            required
            id="city"
            label="City"
            fullWidth
            // variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            onChange={(e) => setData({ ...data, pincode: e.target.value })}
            value={data.pincode}
            required
            id="pincode"
            label="Pincode"
            fullWidth
            // variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            // variant="standard"
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
