import { NavbarBrand, Navbar, Nav, Image, Container} from 'react-bootstrap';
import { useState } from 'react';
import '../styles/NavigationBar.scss';
import signature from '../assets/signature.png';

function NavigationBar() {
    // eslint-disable-next-line no-undef
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div className='navbarDiv'>
            <Navbar expand='md' fixed='top' className={navbar ? 'navbar active' : 'navbar'}>
                <Container>
                    <NavbarBrand href='/' id='navbarBrandSignature'>
                        <img src={signature} alt='Heidi Signature' className='signature'/>
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse>
                        <Nav className='ml-auto'>
                                <Nav.Link href='#aboutDiv' >About Me</Nav.Link>
                                <Nav.Link href='#profHistoryDiv'>My Work</Nav.Link>
                                <Nav.Link href='#formHeight' id='contactMe'>Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
           </Navbar>
        </div>
    );
}
export default NavigationBar;