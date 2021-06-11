import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/ProfessionalHistory.scss';

export default class ProfessionalHistory extends Component {
    // componentDidUpdate(prevProps) {
    //     console.log(prevProps);
    //     console.log(this.props.height);
    //     if(prevProps !== this.props.height) {
    //         document.getElementById('profHistoryDiv').style.height = this.props.height;
    //     }
    // }

    render() {
        return( 
            <div className='professionalHistory' id='profHistoryDiv'>
                <Container className='align-items-center'>
                    <Row className='align-items-center'>
                        <Col md={4} id='areasOfExpertise'>
                            <h3 className='title'>Areas of Expertise</h3><br />
                            <h5>Diversity and inclusion practices</h5><br />
                            <h5>Gender and sexuality</h5><br />
                            <h5>LGBTQ2S+ advocacy</h5><br />
                            <h5>Body neutrality, body image, disordered eating support</h5><br />
                            <h5>Youth empowerment, leadership</h5>
                        </Col>
                        <Col md={4} id='academicWork'>
                            <h3 className='title'>Academic Work</h3><br />
                            <h5>University of Calgary- Research Assistant under Gina Dimitroupolos (Present)</h5>
                            <br />
                            <h5>Ryerson University  - MA Child and Youth Care</h5>
                            <h6>- Thesis: Exploring Transgender Youth's Experiences of Disordered Eating</h6>
                            <h6>- The work of the thesis is currently ongoing in partnership with Dr. Julie James, Ryerson University</h6>
                            <br />
                            <h5>Dalhousie University - BA Gender and Women's Studies</h5>
                        </Col>
                        <Col md={4} id='otherWork'>
                            <h3 className='title'>Other Work</h3><br />
                            <h5>Eating Disorder Support Network of Alberta (Present)</h5>
                            <h6>- LGBTQ2S+ resource development </h6>
                            <br />
                            <h5>National Eating Disorder Information Centre (2020)</h5>
                            <h6>- LGBTQ2S+ resource development</h6>
                            <br />
                            <h5>South House Gender and Sexuality Centre (2018)</h5>
                            <br />
                            <h5>Lotus Women's Centre (2017-2018)</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}