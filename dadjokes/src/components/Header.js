import React from 'react';
import './Header.scss';

function Header() {
	return (
		<div className='headerWrapper'>
			<h1 class='headline'>DAD JOKES</h1>
			<nav className='navigation'>
				<button>Sign up</button>
				<button>Log In</button>
			</nav>
		</div>
	);
}

export default Header;
