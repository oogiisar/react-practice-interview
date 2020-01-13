import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


// Link redirect to the home page it changes the URL

class Header extends Component {
    render() {
        return (
            <div className='banner'>
                <Link to='/' className='header'>
                    <h1 className='header'>Book</h1>
                </Link>
            </div>
        );
    }

}

export default Header;
