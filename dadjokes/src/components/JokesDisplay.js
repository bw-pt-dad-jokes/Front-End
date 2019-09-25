import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Card } from 'semantic-ui-react';

function JokesDisplay() {
	const [jokes, setJokes] = useState([]);

	useEffect(() => {
		axios
			.get('https://dadjokes-buildweeks.herokuapp.com/api/publicJokes')
			.then((res) => setJokes(res.data))
			.catch((err) => console.log('Error ', err));
	}, []);
	console.log(jokes);

	return (
		<>
			{jokes.map((joke) => {
				return (
					<Grid key={joke.id}>
						<Grid.Column mobile={12} tablet={6}>
							<Card>
								<Card.Content>
									<Card.Description>{joke.joke}</Card.Description>
								</Card.Content>
							</Card>
						</Grid.Column>
					</Grid>
				);
			})}
		</>
	);
}

export default JokesDisplay;
