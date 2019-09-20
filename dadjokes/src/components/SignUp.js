import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';

function SignUp({ errors, touched, status }) {
	const [user, setUser] = useState([]);

	useEffect(() => {}, []);

	return (
		<div>
			<h3>To see all Dad Jokes Please sign up fro an an account:</h3>
			<Form>
				{touched.email && errors.email && <p>{errors.email}</p>}
				<label htmlFor='user-email'>User Email</label>
				<Field input='email' id='user-email' name='email' placeholder='Email@address.com' />

				{touched.password && errors.password && <p>{errors.password}</p>}
				<label htmlFor='user-password'>Password</label>
				<Field input='password' id='user-password' name='password' placeholder='123abc@' />

				<button type='submit'>Sign Me up Scotty....</button>
			</Form>
		</div>
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
	handleSubmit: (values, { setStatus }) => {
		// build out the submit function with axios here....
	},
})(SignUp);
