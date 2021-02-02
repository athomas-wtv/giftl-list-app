import React from "react";
import {Link} from 'react-router-dom'

function CreateAccountForm() {
  return (
    <React.Fragment>
      <label>First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        placeholder="Your name"
      />
      <br />
      <label>Last Name</label>
      <input id="lastName" name="lastName" type="text" placeholder="Username" />
      <br />
      <label>Username</label>
      <input id="username" name="username" type="text" placeholder="Username" />
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
        <button>Create</button>
      </Link>
    </React.Fragment>
  );
}
export default CreateAccountForm