import { useEffect, ReactDOM} from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../styles/EmailForm.scss';

function EmailForm() {
    var txtFName = document.getElementById('txtFName');
    var txtLName = document.getElementById('txtLName');
    var txtEmailAddress = document.getElementById('txtEmail');
    var txtPhone = document.getElementById('txtPhone');
    var txtContent = document.getElementById('txtContent');
    const apiURL = 'https://16t26jt140.execute-api.us-west-2.amazonaws.com/live';


    useEffect(() => {
    })

    const postForm = () => {
        var custJSONString = {"name":(txtFName.value + " " + txtLName.value), "email":txtEmailAddress.value, "phone":txtPhone.value, "message":txtContent.value};
        try{
            axios.post(apiURL, custJSONString)
            .then((response) => {
                console.log(response);
            })
        }
        catch(e)
        {
            console.log(e);
        }
    }

    return (
        <div id='formHeight'>
            <p id='test'>Testing testing</p>
            <Form className='form' method='post' action='https://16t26jt140.execute-api.us-west-2.amazonaws.com/live'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="name">
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control type="string" placeholder="Enter first name" id='txtFName' />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="emailFormLName">
                                <Form.Label>Last Name:</Form.Label>
                                <Form.Control type="string" placeholder="Enter last name" id='txtLName' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="email">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" id='txtEmail'/>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="phone">
                                <Form.Label>Your Phone</Form.Label>
                                <Form.Control type="string" placeholder="Enter phone number (optional)" id='txtPhone'/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10}>
                            <Form.Group controlId="message" id='textArea'>
                                <Form.Label>Content:</Form.Label>
                                <Form.Control as="textarea" rows={5} id='txtContent'/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row id='btnRow'>
                        <Col md={12} id='colBtnSubmit'>
                            <Button variant="primary" onClick={postForm} id='btnSubmit'>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}

export default EmailForm;