import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

function SignUp({ errors, touched, status }) {
	return (
		<div>
			<h3>To see all Dad Jokes Please sign up fro an an account:</h3>
			<Form>
				{touched.email && errors.username && <p>{errors.username}</p>}
				<label htmlFor='user-username'>User Email</label>
				<Field input='text' id='user-username' name='username' placeholder='Username...' />

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
			username: values.username || '',
			password: values.password || '',
		};
	},
	validationSchema: yup.object().shape({
		email: yup
			.string()
			.required('username Required')
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
			.post('https://dadjokes-buildweeks.herokuapp.com/api/auth/register', values, axiosConfig)
			.then((res) => console.log('r', res))
			.catch(function(error) {
				if (error.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js
					console.log(error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('Error', error.message);
				}
				console.log(error.config);
			});
	},
})(SignUp);

let axiosConfig = {
	headers: {
		'Content-Type': 'application/json',
	},
};
