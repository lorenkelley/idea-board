import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
//  set a variable to = styled.(div,h1, h4) whatever element 

const NavBarStyles = styled.div`
background: white;
font-size: 22px;
padding: 15px 25px;
box-shadow: 0px 5px 0px 0px whitesmoke;
display: flex;
justify-content: space-around;
a {
    text-decoration: none;
    color: #BDDC3E;
}
`
class NavBar extends Component {
    render() {
        return (
            <NavBarStyles>
    
                <Link to="/"> IdeasBoard </Link>
                <Link to="/login">Login</Link>
                <Link to="/ideas">Ideas</Link>
            </NavBarStyles>
        );
    }
}

export default NavBar;