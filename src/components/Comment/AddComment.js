import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const AddComment = () => {
    return <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows="3" placeholder="Write a comment..."/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Post Comment
        </Button>
    </Form>
}

export default AddComment;