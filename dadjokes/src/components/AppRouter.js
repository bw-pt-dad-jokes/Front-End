import React from 'react'
import { Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp.js';
import Home from './Home.js';

export default function AppRouter() {
    return (
        <>  
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
        </>
    )
}