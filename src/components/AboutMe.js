import { Component } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../styles/AboutMe.scss';
import heidiHeadshot from '../assets/heidiHeadshot.jpg';

export default class AboutMe extends Component {
    componentDidMount() {
        this.getAboutDivHeight();
    }

    getAboutDivHeight = () => {
        var height = window.getComputedStyle(document.getElementById('aboutDiv'), null).getPropertyValue('height');
        console.log(height);
        this.props.onGetAboutDivHeight(height);
    }
    
    render() {
        return (
            <div className='AboutMe' id='aboutDiv'>
                <Container>
                    <Row className='align-items-center' id='AboutMeRow'>
                        <Col id='AboutMeColHeadshot'xs={12}md={5}>
                            <Image src={heidiHeadshot} alt='' className='HeidiHeadshot' id='HeidiHeadshot' fluid roundedCircle/>
                        </Col>
                        <Col id='AboutMeColDescription' xs={12} md={6}>
                            <div id='HeidiDescription'>
                                <h1 id='aboutLabel'>About</h1>
                                <p>Heidi is a Child and Youth Care Practitioner (MA) in Calgary AB.  She holds a Masters in CYC from Ryerson University and a Bachelor of Gender and Women's Studies at University of King's College. </p>
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