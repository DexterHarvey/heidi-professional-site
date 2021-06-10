import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './EmailForm.scss';

function EmailForm() {
    return (
        <Form className='form'>
            <Container>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
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
                    <Col md={6}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Content:</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}

export default EmailForm;