import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("token")));

    return (
        <Router>
            <HeaderStyle>
                <p>Blogger Pro</p>
                <MenuStyle>
                    {isLoggedIn ? null : <li><Link to="/login">Login</Link></li>}
                    {isLoggedIn ? <li><Link to="/view">View</Link></li> : null}
                    {isLoggedIn ? <li><Link to="/logout">Logout</Link></li> : null}
                </MenuStyle>
            </HeaderStyle>
        </Router>
    );
}

export default Header;

const HeaderStyle = styled.div`
    padding: 1em;
    background-color: #daa1ac;
    display:flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-weight: bold;
        font-size: 1.5em;
    }
`

const MenuStyle = styled.ul`
  li {
        display: inline-block;
        padding: 0.3rem 1rem;
        
        a {
            text-decoration: none;
            color: black;
            font-size: 1em;
        }
    }
`