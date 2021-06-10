import { Component } from 'react';
import './ProfessionalHistory.css';
import { Container, Row, Col } from 'react-bootstrap';

export default class ProfessionalHistory extends Component {
    render() {
        return( 
            <div className='professionalHistory'>
                <Container className='align-items-center'>
                    <Row className='align-items-center'>
                        <Col md={4}>
                            <h3>Areas of Expertise</h3>
                            <h6>I am a very important person, I own many 
                                leather bound books on shelves of rich
                                mahogony. Also, eating disorders.
                            </h6>
                        </Col>
                        <Col md={4}>
                            <h3>Work</h3>
                            <h6>link to download of masters/other work? 
                                Currently I 
                                am working with Gina Fetagyropolis of the 
                                University of Calgary on further CYC/eating
                                disorder research
                            </h6>
                        </Col>
                        <Col md={4}>
                            <h3>Education/Work History</h3>
                            <h6>Dalhousie University - Major in GWS, Minor in 
                                Sociology 
                            </h6>
                            <br />
                            <h6>Ryerson University  - Master's of Child and 
                                Youth Care 
                            </h6>
                            <br />
                            <h6>
                                NEDIC - Volunteer work, developed resource
                            </h6>
                            <br />
                            <h6>
                                U of C - Research Assistant to Gina 
                                OliveTzatziki
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}