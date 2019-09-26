import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, Segment, Dimmer, Loader } from 'semantic-ui-react';
import styled from 'styled-components';

function JokesDisplay() {
	const [jokes, setJokes] = useState([]);

	useEffect(() => {
		axios
			.get('https://dadjokeproject.herokuapp.com/api/jokes')
			.then((res) => setJokes(res.data))
			.catch((err) => console.log('Error ', err));
	}, []);

	console.log('jokes', jokes);
	if (!jokes)
		return (
			<>
				<Segment>
					<Dimmer active>
						<Loader>Loading...</Loader>
					</Dimmer>
				</Segment>
			</>
		);

	return (
		<JokeWrapper>
			{jokes.map((joke) => {
				return (
					<Grid key={joke.id} centered columns={4}>
						<Grid.Row>
							<JokerGrid>
								<JokeCard>
									<Card.Content>
										<Card.Description>{joke.dadjoke}</Card.Description>
									</Card.Content>
								</JokeCard>
							</JokerGrid>
						</Grid.Row>
					</Grid>
				);
			})}
		</JokeWrapper>
	);
}

export default JokesDisplay;

const JokeWrapper = styled.div`
	margin-top: 45px;
`;

const JokerGrid = styled(Grid.Column)`
	margin-left: auto;
	margin-right: auto;
`;

const JokeCard = styled(Card)`
	margin-right: auto;
	margin-left: auto;
	max-width: 675px !important;
	min-width: 300px;
`;
