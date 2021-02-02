import React from 'react'
import { Link } from 'react-router-dom'

function LoginForm() {
    return (
        <React.Fragment>
            <label>Username</label>
            <input id="username" name="username" type="text" placeholder="Username" />
            <br />
            <label>Password</label>
            <input id="password" name="password" type="password" placeholder="Password" />
            <br />
            <button>Login</button>
            <Link to="/createaccount">
                <button>Create Account</button>
            </Link>
        </React.Fragment>
    )
}

export default LoginForm
