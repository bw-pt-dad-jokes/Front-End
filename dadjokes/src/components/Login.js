import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const LoginSchema = yup.object().shape({
	username: yup.string().required('Username is required'),
	password: yup
		.string()
		.required('Password is required')
		.min(5, 'Password must be 5 char minimum'),
});

function submitButton(values) {
	axios
		.post('https://reqres.in/api/users', values)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log('Err', err);
		});
}

export default function LoginPage() {
	return (
		<>
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
					<Formik
						initialValues={{ username: '', password: '' }}
						validationSchema={LoginSchema}
						onSubmit={(values) => {
							submitButton(values);
						}}
						render={({ handleSubmit, values, touched, errors }) => (
							<Form onSubmit={handleSubmit}>
								{errors.username && touched.username && <p className='error'>{errors.username}</p>}
								<Field
									name='username'
									value={values.username}
									placeholder='Username'
									style={{
										width: '200px',
									}}
								/>{' '}
								<br />
								{errors.password && touched.password && <p className='error'>{errors.password}</p>}
								<Field
									type='password'
									name='password'
									value={values.password}
									placeholder='Password'
									style={{
										width: '200px',
									}}
								/>{' '}
								<br />
								<button type='submit'>Login Me In Scotty.....</button>
							</Form>
						)}
					/>
				</div>
			</div>
		</>
	);
}
