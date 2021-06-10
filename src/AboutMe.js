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
                        <Col id='AboutMeColHeadshot'xs={12}md={5}>
                            <Image src={heidiHeadshot} alt='' className='HeidiHeadshot' fluid roundedCircle/>
                        </Col>
                        <Col id='AboutMeColDescription' xs={12} md={6}>
                            <div id='HeidiDescription'>
                                <h1 id='aboutLabel'>About</h1>
                                <p>Heidi is a Child and Youth Care Practitioner (MCYC) in Calgary AB.  She holds a Masters in CYC from Ryerson University and a Bachelor of Gender and Women's Studies at University of King's College. </p>
                                <p>Heidi has a dedication to serving the LGBTQ2D+ community as an ally, and an advocate. She has specialized in gender and sexuality empowerment since 2016, and is currently working on research focused on trans youth's experiences of disordered eating behaviour. </p>
                                <p>Her approach to CYC work is relational and non-judgemental. Additionally she offers constructive suggestions and ideas when consulted by organizations. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    };
}