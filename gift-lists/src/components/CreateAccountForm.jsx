import React, {useState} from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Formik} from 'formik'

const api = axios.create({
    baseURL: 'https://localhost:5001',
    headers: { 'Access-Control-Allow-Origin': true }
})


function CreateAccountForm() {
        
    return (
      <React.Fragment>
        <Formik
            initialValues={{firstName: '',lastName: '', emailAddress: '', userName:'', address1: '', address2: '', city: '', state: '', postalCode: '',password: ''}}
            onSubmit={(user, { setSubmitting }) => {
              var bcrypt = require('bcryptjs');
              var salt = bcrypt.genSaltSync(10);
              var hash = bcrypt.hashSync(user.password, salt);
              user.password = hash;
              api.post('api/user/register', user).then(res => alert(`${res.data.firstName}'s account created!`));
            }}
        >
          {({values, handleChange, handleBlur, handleSubmit}) => (
              <form onSubmit={handleSubmit}>
              <label>First Name</label>
              <input id="firstName" name="firstName" type="text" value={values.firstName} placeholder="First name" onChange={handleChange} onBlur={handleBlur} />
              <br />
              <label>Last Name</label>
              <input id="lastName" name="lastName" type="text" value={values.lastName} onChange={handleChange} placeholder="Last name"/>
              <br />
              <label>Username</label>
              <input id="userName" name="userName" type="text" value={values.userName} onChange={handleChange} placeholder="Username" />
              <br />

              <label>Email</label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                placeholder="Email"
                value={values.emailAddress} onChange={handleChange}
              />
              <br />
              <label>Address</label>
              <input id="address1" name="address1" type="text" placeholder="Address 1" value={values.address1} onChange={handleChange} />
              <br />
              <label>Address2</label>
              <input
                id="address2"
                name="address2"
                type="text"
                placeholder="Address 2"
                value={values.address2} onChange={handleChange}
              />
              <br />
              <label>City</label>
              <input id="city" name="city" type="text" placeholder="City" value={values.city} onChange={handleChange} />
              <br />
              <label>State</label>
              <input id="state" name="state" type="text" placeholder="State" value={values.state} onChange={handleChange} />
              <br />
              <label>Postal Code</label>
              <input
                id="postalCode"
                name="postalCode"
                type="text"
                placeholder="Zip Code"
                value={values.postalCode} onChange={handleChange}
              />
              <br />

              <label>Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={values.password} onChange={handleChange}
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