import { useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/EmailForm.scss';

function EmailForm() {
    useEffect(() => {
        console.log(document.getElementById('formHeight').clientHeight)
    })
    return (
        <div id='formHeight'>
            <Form className='form'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="emailFormFName">
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control type="string" placeholder="Enter first name" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="emailFormLName">
                                <Form.Label>Last Name:</Form.Label>
                                <Form.Control type="string" placeholder="Enter last name" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formBasicSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="string" placeholder="Subject" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10}>
                            <Form.Group controlId="emailFormTextArea" id='textArea'>
                                <Form.Label>Content:</Form.Label>
                                <Form.Control as="textarea" rows={5} />
                            </Form.Group>
                        </Col>
                        <Col md={2} id='colBtnSubmit'>
                            <Button variant="primary" type="submit" id='btnSubmit'>
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