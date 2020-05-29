import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useFormik} from 'formik';
import * as yup from 'yup';

export const AddArticle = () => {
    /* payload - {"article":{"title":"sonali test","description":"My first article","body":"hello, this  is my first article","tagList":[]}}
        api - https://conduit.productionready.io/api/articles
    */
    // const schema = yup.object({
    //     // title: yup.string().required(),
    //     // body: yup.string().required()
    // });
  
    
    const formik = useFormik({
        // validationSchema: {schema},
        initialValues: {
            title: '',
            description: '',
            body: '',
            tagList: []
        },
        onSubmit: (values) => {
            console.log('form submission complete!!', values);
        }
    })
        
    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group controlId="title">
                <Form.Control type="text" placeholder="Article Title" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title} />
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Control type="text" placeholder="What's this article about?" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description} />
            </Form.Group>
            <Form.Group controlId="body">
                <Form.Control as="textarea" rows="5" placeholder="Write your article (in markdown)" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.body}/>
            </Form.Group>
            <Form.Group controlId="tagList">
                <Form.Control type="text" placeholder="Enter tags" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.tagList} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Publish Article
            </Button>
        </Form>
    )
 
}

export default AddArticle;