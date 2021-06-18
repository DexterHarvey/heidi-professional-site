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

    useEffect(() => {
    })

    const postForm = () => {
        var custJSONString = {"name":(txtFName.value + " " + txtLName.value), "email":txtEmailAddress.value, "phone":txtPhone.value, "message":txtContent.value};
        // const params = new URLSearchParams();
        // params.append('name', (txtFName.value + ' ' + txtLName.value));
        // params.append('email', txtEmailAddress.value);
        // params.append('phone', txtPhone.value);
        // params.append('message', txtContent.value);

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try{
            axios.post('https://16t26jt140.execute-api.us-west-2.amazonaws.com/live', custJSONString, config)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })
        }
        catch(e)
        {
            console.log(e);
        }
    }

    return (
        <div id='formHeight'>
            <Form className='form' method='post' action='https://16t26jt140.execute-api.us-west-2.amazonaws.com/live'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control type="string" placeholder="Enter first name" id='txtFName' />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Last Name:</Form.Label>
                                <Form.Control type="string" placeholder="Enter last name" id='txtLName' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" id='txtEmail'/>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Your Phone</Form.Label>
                                <Form.Control type="string" placeholder="Enter phone number (optional)" id='txtPhone'/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10}>
                            <Form.Group>
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