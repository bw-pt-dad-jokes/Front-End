import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { Button, Form as Forms, Label, Container, Header, Message } from 'semantic-ui-react';

function SignUp({ errors, touched, status }) {
	return (
		<Container>
			<Header as='h3' style={{ marginTop: '1.875em' }}>
				To see all Dad Jokes Please sign up for an an account:
			</Header>
			<Form className='form-wrapper'>
				{touched.email && errors.email && <Message color='red'>{errors.email}</Message>}

				<Forms.Field>
					<Label htmlFor='user-email'>User Email</Label>
					<Field input='email' id='user-email' name='email' placeholder='Email@address.com' />
				</Forms.Field>
				{touched.password && errors.password && <Message color='red'>{errors.password}</Message>}
				<Forms.Field>
					<Label htmlFor='user-password'>Password</Label>
					<Field input='password' id='user-password' name='password' placeholder='123abc@' />
				</Forms.Field>

				<Button type='submit' style={{ background: '#ff5e13' }}>
					Sign Me up Scotty....
				</Button>
			</Form>
		</Container>
	);
}

export default withFormik({
	mapPropsToValues: (values) => {
		return {
			email: values.email || '',
			password: values.password || '',
		};
	},
	validationSchema: yup.object().shape({
		email: yup
			.string()
			.required('Email Required')
			.email('Valid Email Required Please')
			.trim(),
		password: yup
			.string()
			.required()
			.ensure()
			.min(5, 'Passwords must be at least 5 characters long'),
	}),
	handleSubmit: (values) => {
		// build out the submit function with axios here...,
		axios
			.post('https://reqres.in/api/users', values)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	},
})(SignUp);
