import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// import LoginForm from '../Components/LoginForm'
// import SignupForm from '../Components/SignupForm'
import axios from 'axios';

export default function AuthContainer({isUserLoggedIn}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    return (
        <div>
            <h2>AuthContainer</h2>
            {
                isUserLoggedIn
                    ? <Redirect to="/profile" />
                    : (
                        <Switch>
                            <Route path="/login" render={renderLoginForm} />
                            <Route path="/signup" render={renderSignupForm} />
                        </Switch>
                    )
            }
        </div>

    )

}