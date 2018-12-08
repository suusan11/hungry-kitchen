import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header__flex">
                    <div className='logo'>hello</div>
                    <input className='searchBox' type="text"/>
                </div>
            </header>
        );
    }
}

export default Header;