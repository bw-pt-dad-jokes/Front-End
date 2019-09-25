import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp.js';
import Home from './Home.js';
import JokesDisplay from './JokesDisplay';

export default function AppRouter() {
	return (
		<>
			<Route exact path='/' component={Home} />
			<Route path='/jokes' component={JokesDisplay} />
			<Route path='/login' component={Login} />
			<Route path='/signup' component={SignUp} />
		</>
	);
}
