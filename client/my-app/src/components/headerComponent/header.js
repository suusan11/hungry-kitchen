import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className='logo'>hello</div>
                <input className='searchBox' type="text"/>
            </header>
        );
    }
}

export default Header;