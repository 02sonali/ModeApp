import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const AddArticle = () => {
    return <div className="container p-4">
        <h2>Add Article</h2>
        <Form>
            <Form.Group controlId="title">
                <Form.Control type="text" placeholder="Article Title" />
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>
            <Form.Group controlId="subTitle">
                <Form.Control type="text" placeholder="What's this article about?" />
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Control as="textarea" rows="5" placeholder="Write your article (in markdown)" />
            </Form.Group>
            <Form.Group controlId="tagList">
                <Form.Control type="text" placeholder="Enter tags" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Publish Article
            </Button>
        </Form>
   </div>
}

export default AddArticle;