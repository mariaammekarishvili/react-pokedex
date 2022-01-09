import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (
        <>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand href="/" >
                                >>>  გუჯიკოები
                </NavbarBrand>
            </Navbar>
        </>
    )
}

export default Header;
