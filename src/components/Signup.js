import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {useFormik} from 'formik';
import {connect, useDispatch, useSelector} from 'react-redux';
import { registerUserStart } from '../redux/actions/userActions';

export const Signup = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        // validationSchema: {schema},
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log('form submission complete!!', values);
            dispatch(registerUserStart(values));
        }
    })
        
    return (
        <div className="container p-4">
        <h2>Sign up</h2>
        <Link to="/signin"> Have an account? </Link>
        <Form noValidate onSubmit={formik.handleSubmit} className="container p-4">
            <Form.Group controlId="username">
                <Form.Control type="text" placeholder="Username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username}/>
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>
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
                Sign up
            </Button>
        </Form>
   </div>)
}

export default connect()(Signup);