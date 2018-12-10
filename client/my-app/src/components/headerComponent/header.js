import React, { Component } from 'react';

class Header extends Component {

    state = {keyword: ''};
    onInputChangeHandler = (event) => {
        this.setState({keyword: event.target.value})
    }

    render() {
        return (
            <header>
                <div className="header__flex">
                    <div className='logo'>Hungry-Kitchen</div>
                    <input className='searchBox' onChange={this.onInputChangeHandler} value={this.state.keyword} />
                </div>
            </header>
        );
    }
}

export default Header;