// import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Date from "./Date";
// import Employment from "./Employment";
// import Qualification from "./Qualification";


import * as React from 'react';
import { useState } from 'react';
import { FormControl, Autocomplete, InputLabel, Select, MenuItem, Grid, Typography, TextField } from '@mui/material';

import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';


export default function AddressForm({ data, setData }) {
    // props.func({fname,lname,dob,bplace,gender,states,district,mstatus,pan,etype,quali})
    const [values, setValues] = useState([]);
    const [state, setState] = useState([])









    const onChange = (_, value) => {
        setData({ ...data, district: value })
        setValues(value);
        console.log(value);

    };

    let district = (event, value) => {

        setValues([]);
        console.log(value);
        if (value === null) {
            setData({ ...data, state: "", district: "" })
            setState([])
        }
        else {
            setData({ ...data, state: value, district: "" })
            setState(states[value])



        }

    }



    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                {/* Shipping address */}
            </Typography>
            <Grid container spacing={3} maxWidth="sm">
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={(e) => setData({ ...data, first_name: e.target.value })}
                        value={data.first_name}
                        id="firstName"
                        name="first_name"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"


                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={(e) => setData({ ...data, last_name: e.target.value })}
                        value={data.last_name}
                        id="lastName"
                        name="last_name"
                        label="Last name"
                        fullWidth

                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en-gb"}  >
                        <DemoItem >
                            <DatePicker label="DOB*" disableFuture

                                onAccept={(e) => {
                                    console.log((e["$d"]).getDate());
                                    setData({ ...data, DOB: e })
                                }}
                                name="DOB"
                                value={data.DOB == "" ? null : data.DOB}
                            />
                        </DemoItem>
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="birth_place"
                        name="birth_place"
                        label="Birth Place"
                        fullWidth
                        onChange={(e) => setData({ ...data, birth_place: e.target.value })}
                        value={data.birth_place}


                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Autocomplete
                        required
                        sx={{ width: "100%" }}
                        disablePortal

                        freeSolo
                        forcePopupIcon={true}
                        onChange={district}
                        value={data.state}
                        options={Object.keys(states)}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => <TextField  {...params} label="State" name="state" />}

                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Autocomplete
                        sx={{ width: "100%" }}
                        disablePortal
                        freeSolo
                        forcePopupIcon={true}
                        onChange={onChange}
                        options={!states[data.state] ? state : states[data.state]}
                        value={data.district}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => <TextField id="txt" {...params} label="District*" />}
                    />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <FormControl fullWidth >
                        <InputLabel >Marital Status*</InputLabel>
                        <Select
                            // defaultValue="choose"
                            required

                            id="maritial_status"
                            name="maritial_status"
                            label="Marital Status"
                            onChange={(e) => setData({ ...data, maritial_status: e.target.value })}
                            value={data.maritial_status}

                        >
                            <MenuItem disabled value="choose">Choose Option</MenuItem>
                            <MenuItem value={"Married"}>Married</MenuItem>
                            <MenuItem value={"Single"}>Single</MenuItem>
                            <MenuItem value={"Divorced"}>Divorced</MenuItem>
                            <MenuItem value={"Widowed"}>Widowed</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth >
                        <InputLabel >Gender*</InputLabel>
                        <Select
                            defaultValue="choose"
                            required

                            label="Gender"
                            onChange={(e) => setData({ ...data, gender: e.target.value })}
                            value={data.gender}
                        >
                            <MenuItem disabled value="choose">Choose Option</MenuItem>
                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>

                        </Select>
                    </FormControl>


                </Grid>




                <Grid item xs={12} >
                    <TextField
                        required
                        fullWidth
                        onChange={(e) => setData({ ...data, PAN: e.target.value })}
                        value={data.PAN}
                        id="PAN"
                        name="PAN"
                        label="PAN"

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth >
                        <InputLabel>Education Qualification*</InputLabel>
                        <Select

                            defaultValue="choose"
                            name="qualification"
                            label="EducationQualification"
                            onChange={(e) => setData({ ...data, qualification: e.target.value })}
                            value={data.qualification}
                        >
                            <MenuItem disabled value="choose">Choose Option</MenuItem>
                            <MenuItem value={"Bachelor's degree"}>Bachelor's degree</MenuItem>
                            <MenuItem value={"Diploma"}> Diploma</MenuItem>
                            <MenuItem value={"Certificate"}> Certificate</MenuItem>
                            <MenuItem value={"Postgraduate"}> Postgraduate</MenuItem>


                        </Select>
                    </FormControl>


                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth >
                        <InputLabel >Employment Type*</InputLabel>
                        <Select
                            // defaultValue="choose"
                            label="EmploymentType"
                            name="employement_type"
                            onChange={(e) =>
                                setData({ ...data, employement_type: e.target.value })
                            }
                            value={data.employement_type}
                        >
                            <MenuItem disabled value="choose">Choose Option</MenuItem>
                            <MenuItem value={"Government"}>Government</MenuItem>
                            <MenuItem value={"Private"}>Private</MenuItem>
                            <MenuItem value={"Unemployed"}>Unemployed</MenuItem>

                        </Select>
                    </FormControl>


                </Grid>

            </Grid>
        </React.Fragment>
    );
}

let states =
{

    "Andhra Pradesh":
        ["Anantapur",
            "Chittoor",
            "East Godavari",
            "Guntur",
            "Krishna",
            "Kurnool",
            "Nellore",
            "Prakasam",
            "Srikakulam",
            "Visakhapatnam",
            "Vizianagaram",
            "West Godavari",
            "YSR Kadapa"
        ],

    "Arunachal Pradesh": [
        "Tawang",
        "West Kameng",
        "East Kameng",
        "Papum Pare",
        "Kurung Kumey",
        "Kra Daadi",
        "Lower Subansiri",
        "Upper Subansiri",
        "West Siang",
        "East Siang",
        "Siang",
        "Upper Siang",
        "Lower Siang",
        "Lower Dibang Valley",
        "Dibang Valley",
        "Anjaw",
        "Lohit",
        "Namsai",
        "Changlang",
        "Tirap",
        "Longding"
    ],

    "Assam":
        [
            "Baksa",
            "Barpeta",
            "Biswanath",
            "Bongaigaon",
            "Cachar",
            "Charaideo",
            "Chirang",
            "Darrang",
            "Dhemaji",
            "Dhubri",
            "Dibrugarh",
            "Goalpara",
            "Golaghat",
            "Hailakandi",
            "Hojai",
            "Jorhat",
            "Kamrup Metropolitan",
            "Kamrup",
            "Karbi Anglong",
            "Karimganj",
            "Kokrajhar",
            "Lakhimpur",
            "Majuli",
            "Morigaon",
            "Nagaon",
            "Nalbari",
            "Dima Hasao",
            "Sivasagar",
            "Sonitpur",
            "South Salmara-Mankachar",
            "Tinsukia",
            "Udalguri",
            "West Karbi Anglong"
        ],

    "Bihar":
        [
            "Araria",
            "Arwal",
            "Aurangabad",
            "Banka",
            "Begusarai",
            "Bhagalpur",
            "Bhojpur",
            "Buxar",
            "Darbhanga",
            "East Champaran (Motihari)",
            "Gaya",
            "Gopalganj",
            "Jamui",
            "Jehanabad",
            "Kaimur (Bhabua)",
            "Katihar",
            "Khagaria",
            "Kishanganj",
            "Lakhisarai",
            "Madhepura",
            "Madhubani",
            "Munger (Monghyr)",
            "Muzaffarpur",
            "Nalanda",
            "Nawada",
            "Patna",
            "Purnia (Purnea)",
            "Rohtas",
            "Saharsa",
            "Samastipur",
            "Saran",
            "Sheikhpura",
            "Sheohar",
            "Sitamarhi",
            "Siwan",
            "Supaul",
            "Vaishali",
            "West Champaran"
        ],


    "Chandigarh (UT)":
        [
            "Chandigarh"
        ],
    "Chhattisgarh":
        [
            "Balod",
            "Baloda Bazar",
            "Balrampur",
            "Bastar",
            "Bemetara",
            "Bijapur",
            "Bilaspur",
            "Dantewada (South Bastar)",
            "Dhamtari",
            "Durg",
            "Gariyaband",
            "Janjgir-Champa",
            "Jashpur",
            "Kabirdham (Kawardha)",
            "Kanker (North Bastar)",
            "Kondagaon",
            "Korba",
            "Korea (Koriya)",
            "Mahasamund",
            "Mungeli",
            "Narayanpur",
            "Raigarh",
            "Raipur",
            "Rajnandgaon",
            "Sukma",
            "Surajpur  ",
            "Surguja"
        ],
    "Dadra and Nagar Haveli (UT)":
        [
            "Dadra & Nagar Haveli"
        ],
    "Daman and Diu (UT)":
        [
            "Daman",
            "Diu"
        ],
    "Delhi (NCT)":
        [
            "Central Delhi",
            "East Delhi",
            "New Delhi",
            "North Delhi",
            "North East  Delhi",
            "North West  Delhi",
            "Shahdara",
            "South Delhi",
            "South East Delhi",
            "South West  Delhi",
            "West Delhi"
        ],
    "Goa":
        [
            "North Goa",
            "South Goa"
        ],
    "Gujarat":
        [
            "Ahmedabad",
            "Amreli",
            "Anand",
            "Aravalli",
            "Banaskantha (Palanpur)",
            "Bharuch",
            "Bhavnagar",
            "Botad",
            "Chhota Udepur",
            "Dahod",
            "Dangs (Ahwa)",
            "Devbhoomi Dwarka",
            "Gandhinagar",
            "Gir Somnath",
            "Jamnagar",
            "Junagadh",
            "Kachchh",
            "Kheda (Nadiad)",
            "Mahisagar",
            "Mehsana",
            "Morbi",
            "Narmada (Rajpipla)",
            "Navsari",
            "Panchmahal (Godhra)",
            "Patan",
            "Porbandar",
            "Rajkot",
            "Sabarkantha (Himmatnagar)",
            "Surat",
            "Surendranagar",
            "Tapi (Vyara)",
            "Vadodara",
            "Valsad"
        ],
    "Haryana":
        [
            "Ambala",
            "Bhiwani",
            "Charkhi Dadri",
            "Faridabad",
            "Fatehabad",
            "Gurgaon",
            "Hisar",
            "Jhajjar",
            "Jind",
            "Kaithal",
            "Karnal",
            "Kurukshetra",
            "Mahendragarh",
            "Mewat",
            "Palwal",
            "Panchkula",
            "Panipat",
            "Rewari",
            "Rohtak",
            "Sirsa",
            "Sonipat",
            "Yamunanagar"
        ],
    "Himachal Pradesh":
        [
            "Bilaspur",
            "Chamba",
            "Hamirpur",
            "Kangra",
            "Kinnaur",
            "Kullu",
            "Lahaul &amp; Spiti",
            "Mandi",
            "Shimla",
            "Sirmaur (Sirmour)",
            "Solan",
            "Una"
        ],
    "Jammu and Kashmir": [
        "Anantnag",
        "Bandipore",
        "Baramulla",
        "Budgam",
        "Doda",
        "Ganderbal",
        "Jammu",
        "Kargil",
        "Kathua",
        "Kishtwar",
        "Kulgam",
        "Kupwara",
        "Leh",
        "Poonch",
        "Pulwama",
        "Rajouri",
        "Ramban",
        "Reasi",
        "Samba",
        "Shopian",
        "Srinagar",
        "Udhampur"
    ],
    "Jharkhand":
        [
            "Bokaro",
            "Chatra",
            "Deoghar",
            "Dhanbad",
            "Dumka",
            "East Singhbhum",
            "Garhwa",
            "Giridih",
            "Godda",
            "Gumla",
            "Hazaribag",
            "Jamtara",
            "Khunti",
            "Koderma",
            "Latehar",
            "Lohardaga",
            "Pakur",
            "Palamu",
            "Ramgarh",
            "Ranchi",
            "Sahibganj",
            "Seraikela-Kharsawan",
            "Simdega",
            "West Singhbhum"
        ],

    "Karnataka": [
        "Bagalkot",
        "Ballari (Bellary)",
        "Belagavi (Belgaum)",
        "Bengaluru (Bangalore) Rural",
        "Bengaluru (Bangalore) Urban",
        "Bidar",
        "Chamarajanagar",
        "Chikballapur",
        "Chikkamagaluru (Chikmagalur)",
        "Chitradurga",
        "Dakshina Kannada",
        "Davangere",
        "Dharwad",
        "Gadag",
        "Hassan",
        "Haveri",
        "Kalaburagi (Gulbarga)",
        "Kodagu",
        "Kolar",
        "Koppal",
        "Mandya",
        "Mysuru (Mysore)",
        "Raichur",
        "Ramanagara",
        "Shivamogga (Shimoga)",
        "Tumakuru (Tumkur)",
        "Udupi",
        "Uttara Kannada (Karwar)",
        "Vijayapura (Bijapur)",
        "Yadgir"
    ],
    "Kerala":
        [
            "Alappuzha",
            "Ernakulam",
            "Idukki",
            "Kannur",
            "Kasaragod",
            "Kollam",
            "Kottayam",
            "Kozhikode",
            "Malappuram",
            "Palakkad",
            "Pathanamthitta",
            "Thiruvananthapuram",
            "Thrissur",
            "Wayanad"
        ],
    "Lakshadweep (UT)":
        [
            "Agatti",
            "Amini",
            "Androth",
            "Bithra",
            "Chethlath",
            "Kavaratti",
            "Kadmath",
            "Kalpeni",
            "Kilthan",
            "Minicoy"
        ],
    "Madhya Pradesh":
        [
            "Agar Malwa",
            "Alirajpur",
            "Anuppur",
            "Ashoknagar",
            "Balaghat",
            "Barwani",
            "Betul",
            "Bhind",
            "Bhopal",
            "Burhanpur",
            "Chhatarpur",
            "Chhindwara",
            "Damoh",
            "Datia",
            "Dewas",
            "Dhar",
            "Dindori",
            "Guna",
            "Gwalior",
            "Harda",
            "Hoshangabad",
            "Indore",
            "Jabalpur",
            "Jhabua",
            "Katni",
            "Khandwa",
            "Khargone",
            "Mandla",
            "Mandsaur",
            "Morena",
            "Narsinghpur",
            "Neemuch",
            "Panna",
            "Raisen",
            "Rajgarh",
            "Ratlam",
            "Rewa",
            "Sagar",
            "Satna",
            "Sehore",
            "Seoni",
            "Shahdol",
            "Shajapur",
            "Sheopur",
            "Shivpuri",
            "Sidhi",
            "Singrauli",
            "Tikamgarh",
            "Ujjain",
            "Umaria",
            "Vidisha"
        ],
    "Maharashtra":
        [
            "Ahmednagar",
            "Akola",
            "Amravati",
            "Aurangabad",
            "Beed",
            "Bhandara",
            "Buldhana",
            "Chandrapur",
            "Dhule",
            "Gadchiroli",
            "Gondia",
            "Hingoli",
            "Jalgaon",
            "Jalna",
            "Kolhapur",
            "Latur",
            "Mumbai City",
            "Mumbai Suburban",
            "Nagpur",
            "Nanded",
            "Nandurbar",
            "Nashik",
            "Osmanabad",
            "Palghar",
            "Parbhani",
            "Pune",
            "Raigad",
            "Ratnagiri",
            "Sangli",
            "Satara",
            "Sindhudurg",
            "Solapur",
            "Thane",
            "Wardha",
            "Washim",
            "Yavatmal"
        ],
    "Manipur":
        [
            "Bishnupur",
            "Chandel",
            "Churachandpur",
            "Imphal East",
            "Imphal West",
            "Jiribam",
            "Kakching",
            "Kamjong",
            "Kangpokpi",
            "Noney",
            "Pherzawl",
            "Senapati",
            "Tamenglong",
            "Tengnoupal",
            "Thoubal",
            "Ukhrul"
        ],
    "Meghalaya":
        [
            "East Garo Hills",
            "East Jaintia Hills",
            "East Khasi Hills",
            "North Garo Hills",
            "Ri Bhoi",
            "South Garo Hills",
            "South West Garo Hills ",
            "South West Khasi Hills",
            "West Garo Hills",
            "West Jaintia Hills",
            "West Khasi Hills"
        ],
    "Mizoram":
        [
            "Aizawl",
            "Champhai",
            "Kolasib",
            "Lawngtlai",
            "Lunglei",
            "Mamit",
            "Saiha",
            "Serchhip"
        ],
    "Nagaland":
        [
            "Dimapur",
            "Kiphire",
            "Kohima",
            "Longleng",
            "Mokokchung",
            "Mon",
            "Peren",
            "Phek",
            "Tuensang",
            "Wokha",
            "Zunheboto"
        ],
    "Odisha":
        [
            "Angul",
            "Balangir",
            "Balasore",
            "Bargarh",
            "Bhadrak",
            "Boudh",
            "Cuttack",
            "Deogarh",
            "Dhenkanal",
            "Gajapati",
            "Ganjam",
            "Jagatsinghapur",
            "Jajpur",
            "Jharsuguda",
            "Kalahandi",
            "Kandhamal",
            "Kendrapara",
            "Kendujhar (Keonjhar)",
            "Khordha",
            "Koraput",
            "Malkangiri",
            "Mayurbhanj",
            "Nabarangpur",
            "Nayagarh",
            "Nuapada",
            "Puri",
            "Rayagada",
            "Sambalpur",
            "Sonepur",
            "Sundargarh"
        ],
    "Puducherry (UT)":
        [
            "Karaikal",
            "Mahe",
            "Pondicherry",
            "Yanam"
        ],
    "Punjab":
        [
            "Amritsar",
            "Barnala",
            "Bathinda",
            "Faridkot",
            "Fatehgarh Sahib",
            "Fazilka",
            "Ferozepur",
            "Gurdaspur",
            "Hoshiarpur",
            "Jalandhar",
            "Kapurthala",
            "Ludhiana",
            "Mansa",
            "Moga",
            "Muktsar",
            "Nawanshahr (Shahid Bhagat Singh Nagar)",
            "Pathankot",
            "Patiala",
            "Rupnagar",
            "Sahibzada Ajit Singh Nagar (Mohali)",
            "Sangrur",
            "Tarn Taran"
        ],
    "Rajasthan":
        [
            "Ajmer",
            "Alwar",
            "Banswara",
            "Baran",
            "Barmer",
            "Bharatpur",
            "Bhilwara",
            "Bikaner",
            "Bundi",
            "Chittorgarh",
            "Churu",
            "Dausa",
            "Dholpur",
            "Dungarpur",
            "Hanumangarh",
            "Jaipur",
            "Jaisalmer",
            "Jalore",
            "Jhalawar",
            "Jhunjhunu",
            "Jodhpur",
            "Karauli",
            "Kota",
            "Nagaur",
            "Pali",
            "Pratapgarh",
            "Rajsamand",
            "Sawai Madhopur",
            "Sikar",
            "Sirohi",
            "Sri Ganganagar",
            "Tonk",
            "Udaipur"
        ],
    "Sikkim":
        [
            "East Sikkim",
            "North Sikkim",
            "South Sikkim",
            "West Sikkim"
        ],
    "Tamil Nadu":
        [
            "Ariyalur",
            "Chennai",
            "Coimbatore",
            "Cuddalore",
            "Dharmapuri",
            "Dindigul",
            "Erode",
            "Kanchipuram",
            "Kanyakumari",
            "Karur",
            "Krishnagiri",
            "Madurai",
            "Nagapattinam",
            "Namakkal",
            "Nilgiris",
            "Perambalur",
            "Pudukkottai",
            "Ramanathapuram",
            "Salem",
            "Sivaganga",
            "Thanjavur",
            "Theni",
            "Thoothukudi (Tuticorin)",
            "Tiruchirappalli",
            "Tirunelveli",
            "Tiruppur",
            "Tiruvallur",
            "Tiruvannamalai",
            "Tiruvarur",
            "Vellore",
            "Viluppuram",
            "Virudhunagar"
        ],
    "Telangana":
        [
            "Adilabad",
            "Bhadradri Kothagudem",
            "Hyderabad",
            "Jagtial",
            "Jangaon",
            "Jayashankar Bhoopalpally",
            "Jogulamba Gadwal",
            "Kamareddy",
            "Karimnagar",
            "Khammam",
            "Komaram Bheem Asifabad",
            "Mahabubabad",
            "Mahabubnagar",
            "Mancherial",
            "Medak",
            "Medchal",
            "Nagarkurnool",
            "Nalgonda",
            "Nirmal",
            "Nizamabad",
            "Peddapalli",
            "Rajanna Sircilla",
            "Rangareddy",
            "Sangareddy",
            "Siddipet",
            "Suryapet",
            "Vikarabad",
            "Wanaparthy",
            "Warangal (Rural)",
            "Warangal (Urban)",
            "Yadadri Bhuvanagiri"
        ],
    "Tripura":
        [
            "Dhalai",
            "Gomati",
            "Khowai",
            "North Tripura",
            "Sepahijala",
            "South Tripura",
            "Unakoti",
            "West Tripura"
        ],
    "Uttarakhand":
        [
            "Almora",
            "Bageshwar",
            "Chamoli",
            "Champawat",
            "Dehradun",
            "Haridwar",
            "Nainital",
            "Pauri Garhwal",
            "Pithoragarh",
            "Rudraprayag",
            "Tehri Garhwal",
            "Udham Singh Nagar",
            "Uttarkashi"
        ],
    "Uttar Pradesh":
        [
            "Ayodhya",
            "Prayagraj",
            "Agra",
            "Aligarh",
            "Ambedkar Nagar",
            "Amethi (Chatrapati Sahuji Mahraj Nagar)",
            "Amroha (J.P. Nagar)",
            "Auraiya",
            "Azamgarh",
            "Baghpat",
            "Bahraich",
            "Ballia",
            "Balrampur",
            "Banda",
            "Barabanki",
            "Bareilly",
            "Basti",
            "Bhadohi",
            "Bijnor",
            "Budaun",
            "Bulandshahr",
            "Chandauli",
            "Chitrakoot",
            "Deoria",
            "Etah",
            "Etawah",
            "Farrukhabad",
            "Fatehpur",
            "Firozabad",
            "Gautam Buddha Nagar",
            "Ghaziabad",
            "Ghazipur",
            "Gonda",
            "Gorakhpur",
            "Hamirpur",
            "Hapur (Panchsheel Nagar)",
            "Hardoi",
            "Hathras",
            "Jalaun",
            "Jaunpur",
            "Jhansi",
            "Kannauj",
            "Kanpur Dehat",
            "Kanpur Nagar",
            "Kanshiram Nagar (Kasganj)",
            "Kaushambi",
            "Kushinagar (Padrauna)",
            "Lakhimpur - Kheri",
            "Lalitpur",
            "Lucknow",
            "Maharajganj",
            "Mahoba",
            "Mainpuri",
            "Mathura",
            "Mau",
            "Meerut",
            "Mirzapur",
            "Moradabad",
            "Muzaffarnagar",
            "Pilibhit",
            "Pratapgarh",
            "RaeBareli",
            "Rampur",
            "Saharanpur",
            "Sambhal (Bhim Nagar)",
            "Sant Kabir Nagar",
            "Shahjahanpur",
            "Shamali (Prabuddh Nagar)",
            "Shravasti",
            "Siddharth Nagar",
            "Sitapur",
            "Sonbhadra",
            "Sultanpur",
            "Unnao",
            "Varanasi"
        ],
    "West Bengal":
        [
            "Alipurduar",
            "Bankura",
            "Birbhum",
            "Burdwan (Bardhaman)",
            "Cooch Behar",
            "Dakshin Dinajpur (South Dinajpur)",
            "Darjeeling",
            "Hooghly",
            "Howrah",
            "Jalpaiguri",
            "Kalimpong",
            "Kolkata",
            "Malda",
            "Murshidabad",
            "Nadia",
            "North 24 Parganas",
            "Paschim Medinipur (West Medinipur)",
            "Purba Medinipur (East Medinipur)",
            "Purulia",
            "South 24 Parganas",
            "Uttar Dinajpur (North Dinajpur)"
        ]
}
