import React from 'react';
import { Button, Form as Forms, Container, Message } from 'semantic-ui-react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const LoginSchema = yup.object().shape({
	username: yup.string().required('Username is required!'),
	password: yup
		.string()
		.required('Password is required')
		.min(5, 'Password must be 5 char minimum'),
});

function submitButton(values) {
	console.log(values.username)

	// axios({
	// 	method: 'post',
	// 	url: '/login',
	// 	data: {
	// 	  username: 'Finn',
	// 	  lastName: 'Williams'
	// 	}
	//   });

	// axios
	// 	.post('https://reqres.in/api/users', values)
	// 	.then((res) => {
	// 		console.log(res);
	// 	})
	// 	.catch((err) => {
	// 		console.log('Err', err);
	// 	});
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
							<Forms onSubmit={handleSubmit}>
								{console.log(errors)}
								{errors.username && touched.username && <Message color='red'>{errors.username}</Message>}
								<Field
									name='username'
									value={values.username}
									placeholder='Username'
									style={{
										width: '200px',
									}}
								/>{' '}
								<br />
								{errors.password && touched.password &&  <p className='error'>{errors.password}</p>}
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
								<Button type='submit' style={{background: '#ff5e13'}}>Login Me In Scotty.....</Button>
							</Forms>
						)}
					/>
				</div>
			</div>
		</>
	);
}
