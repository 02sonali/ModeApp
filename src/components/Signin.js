import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export const Signin = () => {
    return <div className="container p-4">
        <h2>Sign in</h2>
        <Link to="/signup"> Need an account? </Link>
        <Form>
            <Form.Group controlId="formBasicUsername">
                <Form.Control type="text" placeholder="Username" />
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign in
            </Button>
        </Form>
   </div>
}

export default Signin;