import React from 'react';

import NavButton from './NavButton';

import './Header.scss';

function Header() {
	return (
		<div className='headerWrapper'>
			<h1 className='headline'>DAD JOKES</h1>
			<nav className='navigation'>
				<NavButton buttonText='Sign Up' />
				<NavButton buttonText='Log In' />
			</nav>
		</div>
	);
}

export default Header;
