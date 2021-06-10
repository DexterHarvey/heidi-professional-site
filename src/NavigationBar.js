import './NavigationBar.scss';
import { NavbarBrand, Navbar, Nav, Image} from 'react-bootstrap';
import React, { useState } from 'react';
import signature from './signature.png';

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
            <Navbar expand='md' fixed='top' className={navbar ? 'navbarCustom active' : 'navbarCustom'}>
                <NavbarBrand href='/' id='navbarBrandSignature'>
                    <Image src={signature} className='signature' />
                </NavbarBrand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse>
                    <Nav className='ml-auto'>
                            <Nav.Link >About Me</Nav.Link>
                            <Nav.Link >My Work</Nav.Link>
                            <Nav.Link id='contactMe'>Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
           </Navbar>
        </div>
    );
}
export default NavigationBar;