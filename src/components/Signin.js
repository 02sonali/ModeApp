import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import { authStart } from '../redux/actions/userActions';

export const Signin = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        // validationSchema: {schema},
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log('form submission complete!!', values);
            dispatch(authStart(values));
        }
    })
    return <div className="container p-4">
        <h2>Sign in</h2>
        <Link to="/signup"> Need an account? </Link>
        <Form noValidate onSubmit={formik.handleSubmit} className="container p-4">
            <Form.Group controlId="email">
            <Form.Control type="email" placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>
            <Form.Group controlId="password">
            <Form.Control type="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign in
            </Button>
        </Form>
   </div>
}

export default Signin;