import { Navbar, Container, NavbarBrand, Nav } from 'react-bootstrap';
import '../styles/AppFooter.scss';

function AppFooter() {
    return(
        <div id='footer'>  
            <Navbar id='navbarFooter'>
                <Container>
                    <NavbarBrand>Heidi Vander Steen</NavbarBrand>
                    <Navbar.Collapse>
                        <Nav className='ml-auto'>
                            <h6>Website by Dexter Harvey @ </h6>
                            <a href='DexterHarvey.github.io'>DexterHarvey.github.io</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default AppFooter;