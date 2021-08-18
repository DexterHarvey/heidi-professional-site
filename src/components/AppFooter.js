import { Component } from 'react';
import { Navbar, Container, NavbarBrand, Nav } from 'react-bootstrap';
import '../styles/AppFooter.scss';

class AppFooter extends Component{
    render() {
        return(
            <div id='footer'>  
                <Navbar id='navbarFooter'>
                    <Container>
                        <NavbarBrand>Heidi Vander Steen</NavbarBrand>
                        <Navbar.Collapse>
                            <Nav className='ml-auto'>
                                <h6>Website by Dexter Harvey</h6>
                                <h6>DexterHarvey.github.io</h6>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppFooter;