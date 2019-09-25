import React from 'react';
import NavButton from './NavButton';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
	return (
		<div className='headerWrapper'>
			<Link to='/'>
				<h1 className='headline'>DAD JOKES</h1>
			</Link>
			<nav className='navigation'>
				<NavButton linkText='/signup' buttonText='Sign Up' />
				<NavButton linkText='/login' buttonText='Log In' />
			</nav>
		</div>
	);
}

export default Header;
