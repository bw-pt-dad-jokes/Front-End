import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { Button, Form as Forms, Label, Container, Header } from 'semantic-ui-react';
import './SignupLogin.scss';

function SignUp({ errors, touched, status }) {
	return (
		<Container>
			<div>
				<Header as='h3' className='sign-up'>
					To see all Dad Jokes Please sign up for an an account:
				</Header>
				<Form>
					{touched.email && errors.email && <p className='error-message'>{errors.email}</p>}

					<Forms.Field>
						<Label htmlFor='user-email'>User Email</Label>
						<Field input='email' id='user-email' name='email' placeholder='Email@address.com' />
					</Forms.Field>
					{touched.password && errors.password && <p className='error-message'>{errors.password}</p>}
					<Forms.Field>
						<Label htmlFor='user-password'>Password</Label>
						<Field input='password' id='user-password' name='password' placeholder='123abc@' />
					</Forms.Field>

					<Button type='submit'>Sign Me up Scotty....</Button>
				</Form>
			</div>
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
