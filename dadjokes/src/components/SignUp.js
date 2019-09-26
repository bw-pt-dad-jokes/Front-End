import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { Button, Message } from 'semantic-ui-react';
import './Styles.scss';

function SignUp({ errors, touched, status }) {
	return (
		<div>
			<h3>To see all Dad Jokes Please sign up for an an account:</h3>
			<div
				style={{
					background: '#C4C4C4',
					height: '274px',
					width: '333px',
					margin: '100px auto',
					borderRadius: '29px',
				}}
			>
				<div
					style={{
						marginTop: '100px',
						padding: '70px',
					}}
				>
					<Form>
						{touched.username && errors.username && <Message color='red'>{errors.username}</Message>}
						<label htmlFor='user-username'>User Email</label>
						<Field
							input='text'
							id='user-username'
							name='username'
							placeholder='Username...'
							style={{
								width: '200px',
							}}
						/>

						{touched.password && errors.password && <Message color='red'>{errors.password}</Message>}
						<label htmlFor='user-password'>Password</label>
						<Field
							input='password'
							id='user-password'
							name='password'
							placeholder='123abc@'
							className='signup'
							style={{
								width: '200px',
							}}
						/>

						<Button type='submit' style={{ background: '#ff5e13' }}>
							Sign Me up Scotty....
						</Button>
					</Form>
				</div>
			</div>
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
		username: yup
			.string()
			.required('username Required')
			.min(3, 'Need at least 3 characters please'),
		password: yup
			.string()
			.required()
			.ensure()
			.min(5, 'Passwords must be at least 5 characters long'),
	}),
	handleSubmit: (values) => {
		// build out the submit function with axios here...,
		console.log(values);
		axios
			.post('https://dadjokeproject.herokuapp.com/api/auth/register', values, axiosConfig)
			.then((res) => console.log('r', res))
			.catch((err) => console.log('Error', err));
	},
})(SignUp);

let axiosConfig = {
	headers: {
		'Content-Type': 'application/json',
	},
};
