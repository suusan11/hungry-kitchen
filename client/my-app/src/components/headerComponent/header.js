import React, { Component } from 'react';

class Header extends Component {

    onInputChangeHandler = (event) => {
        console.log(event.target.value);
    }

    render() {
        return (
            <header>
                <div className="header__flex">
                    <div className='logo'>Hungry-Kitchen</div>
                    <input className='searchBox' type="text" onChange={this.onInputChangeHandler}/>
                </div>
            </header>
        );
    }
}

export default Header;