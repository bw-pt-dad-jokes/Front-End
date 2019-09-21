import React from 'react'
import { Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp.js';

export default function AppRouter() {
    return (
        <>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
        </>
    )
}