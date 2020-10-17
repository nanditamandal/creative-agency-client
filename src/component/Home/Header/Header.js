import React from 'react';
import NavbarShow from '../Navbar/NavbarShow';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div style={{backgroundColor: '#FBD062', height: '700px'}} className ="header-container">
            <NavbarShow></NavbarShow>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;