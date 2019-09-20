import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';

function LoginPage(props)
 {
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
				<div style={{
                    marginTop: '100px',
                    padding: '70px'
                }}>
					<Form>
                        {props.errors.username && props.touched.username && <p className="error">Username is a required field</p>}
					  <Field name='username' placeholder='Username' style={{
                            width: '200px'
                        }}/> <br />
                          {props.errors.password && props.touched.password && <p className="error">Password is a required field</p>}
						<Field type='password' name='password' placeholder='Password' style={{
                            width: '200px'
                        }} /> <br />
                        <button type="submit">Login Me In Scotty.....</button>
					</Form>
				</div>
			</div>
		</>
	);
}

export default withFormik({
	mapPropsToValues: (props) => {
		return {
            username: props.username || '',
            password: props.password || '',
		};
    },
validationSchema: yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(5)
}),
handleSubmit: (props) => {
// axios request goes here
}
})(LoginPage);
