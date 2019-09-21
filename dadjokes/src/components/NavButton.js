import React from 'react';
import { NavLink } from 'react-router-dom';

function NavButtons(props) {
	const { linkText, buttonText } = props;
	return (
		<>
			<NavLink to={linkText}>
				<button>{buttonText}</button>
			</NavLink>
		</>
	);
}

export default NavButtons;
