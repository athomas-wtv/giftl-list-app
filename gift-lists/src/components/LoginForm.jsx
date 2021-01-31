import React from 'react'

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
            <button>Create Account</button>
        </React.Fragment>
    )
}

export default LoginForm
