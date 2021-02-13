import React, {useState} from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Formik} from 'formik'

const api = axios.create({
    baseURL: 'https://localhost:5001'
})


function CreateAccountForm() {
        
    return (
      <React.Fragment>
        <Formik
            initialValues={{firstName: '',lastName: '', emailAddress: '', address1: '', address2: '', city: '', state: '', postalCode: '',password: ''}}
            onSubmit={(values, { setSubmitting }) => {
              // api.post()
              console.log(values);
              api.post('api/user/register', values).then(res => alert(res.data));
            }}
        >
          {({values, handleChange, handleBlur, handleSubmit}) => (
              <form onSubmit={handleSubmit}>
              <label>First Name</label>
              <input id="firstName" name="firstName" type="text" value={values.firstName} placeholder="Your name" onChange={handleChange} onBlur={handleBlur} />
              <br />
              <label>Last Name</label>
              <input id="lastName" name="lastName" type="text" value={values.lastName} onChange={handleChange} placeholder="Username"/>
              <br />
              <label>Username</label>
              <input id="username" name="username" type="text" value={values.userName} onChange={handleChange} placeholder="Username" />
              <br />

              <label>Email</label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                placeholder="Email"
              />
              <br />
              <label>Address</label>
              <input id="address" name="address" type="text" placeholder="Address 1" />
              <br />
              <label>Address2</label>
              <input
                id="address2"
                name="address2"
                type="text"
                placeholder="Address 2"
              />
              <br />
              <label>City</label>
              <input id="city" name="city" type="text" placeholder="City" />
              <br />
              <label>State</label>
              <input id="state" name="state" type="text" placeholder="State" />
              <br />
              <label>Postal Code</label>
              <input
                id="postalCode`"
                name="postalCode`"
                type="number"
                placeholder="Zip Code"
              />
              <br />

              <label>Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
              <br />
              <Link to="/login">
                <button onClick={handleSubmit}>Create</button>
              </Link>
              </form>

          )}

      </Formik>

    </React.Fragment>
  );
}
export default CreateAccountForm