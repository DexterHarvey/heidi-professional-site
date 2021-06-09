import { Component } from 'react';
import './AboutMe.css'
import heidiHeadshot from './heidiHeadshot.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default class AboutMe extends Component {
    render() {
        return (
            <div className='AboutMe'>
                <Container>
                    <Row className='align-items-center' id='AboutMeRow'>
                        <Col id='AboutMeColHeadshot'xs={12}md={6}>
                            <Image src={heidiHeadshot} alt='' className='HeidiHeadshot' fluid roundedCircle/>
                        </Col>
                        <Col id='AboutMeColDescription' xs={12} md={6}>
                            <div id='HeidiDescription'>
                                <h6>Heidi Vander Steen</h6>
                                <p>Hi my name is Heidi and here is some sample text about me and my life and all the cool things that I have done</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    };
}