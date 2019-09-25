import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './Styles.scss';

function NavButtons(props) {
	const { linkText, buttonText } = props;
	return (
		<>
			<NavLink to={linkText}>
				<Button size='big'>{buttonText}</Button>
			</NavLink>
		</>
	);
}

export default NavButtons;
