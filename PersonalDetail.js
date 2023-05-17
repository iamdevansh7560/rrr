import React from "react";

import { Card, Icon } from "semantic-ui-react";

import { useEffect, useState } from "react";

import { NavLink, useLocation, useParams } from "react-router-dom";

import axios from "axios";

const PersonalDetail = () => {
  //   const location = useLocation();

  //   const formId = location.pathname.split("/")[2];

  const [form, setForm] = useState("");

  const formDetail = () => {
    const formId = localStorage.getItem("form");

    const url = `http://localhost:4002/api/v1/forms/${formId}`;

    axios

      .get(url)

      .then((res) => {
        setForm(res.data.form);

        console.log(form);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    formDetail();
  }, []);

  return (
    <div className="col main  mt-3">
      <h1>Welcome {form.first_name}</h1>

      <Card className="card">
        <Card.Content>
          <div className="row">
            <div className="pl-5 left_view col-lg-6 c0l-md-6 col-12">
              {/* <Icon.Group size='huge' className='mb-4'> */}

              <Icon name="user" />

              {/* </Icon.Group> */}

              <p className="mt-5">
                First Name : <span /> {form.first_name}
                <span />
              </p>

              <p className="mt-4">
                Date of Birth : <span /> {form.DOB} <span />
              </p>

              <p className="mt-4">
                {" "}
                <Icon name="mail" /> Place of Birth : <span />
                {form.birth_place}
                <span />
              </p>

              <p className="mt-4">
                {" "}
                <Icon name="wordpress forms" /> State : <span />
                {form.state}
                <span />
              </p>

              <p className="mt-4">
                Marital Status : <span>{form.maritial_status}</span>
              </p>

              <p className="mt-4">
                Employement Type : <span>{form.employement_type}</span>
              </p>

              <p className="mt-4">
                Father Name : <span>{form.father_name}</span>
              </p>

              <p className="mt-4">
                Mother Name : <span>{form.mother_name}</span>
              </p>

              <p className="mt-4">
                House No : <span>{form.house_no}</span>
              </p>

              <p className="mt-4">
                City : <span>{form.city}</span>
              </p>
            </div>

            <div className="pl-5 right_view col-lg-6 c0l-md-6 col-12">
              <p className="mt-5">
                {" "}
                <Icon name="phone square" /> Last Name :{" "}
                <span>{form.last_name}</span>
              </p>

              <p className="mt-4">
                <Icon name="location arrow" /> Email : <span>{form.email}</span>
              </p>

              <p className="mt-4">
                Gender : <span>{form.gender}</span>
              </p>

              <p className="mt-4">
                District : <span>{form.district}</span>
              </p>

              <p className="mt-4">
                PAN : <span>{form.PAN}</span>
              </p>

              <p className="mt-4">
                Qualification : <span>{form.qualification}</span>
              </p>

              <p className="mt-4">
                Surname : <span>{form.surname}</span>
              </p>

              <p className="mt-4">
                Surname : <span>{form.surname}</span>
              </p>

              <p className="mt-4">
                Street : <span>{form.street}</span>
              </p>

              <p className="mt-4">
                Pincode : <span>{form.pincode}</span>
              </p>
            </div>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default PersonalDetail;
