import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<>
			<div>
				<h1>"just the puns...."</h1>
				<Button as={Link} to='/jokes' size='huge'>
					Show the Yucks...
				</Button>
			</div>
		</>
	);
}
