import React, { Component }from 'react';
import recipe from '../../images/recipe1.JPG';

class Card extends Component {
    render(){
        return(
            <div className="cards">
                <div className="card">
                    <img src={recipe} alt=""/>
                    <h2>title</h2>
                </div>
                <div className="card">
                    <img src={recipe} alt=""/>
                    <h2>title</h2>
                </div>
                <div className="card">
                    <img src={recipe} alt=""/>
                    <h2>title</h2>
                </div>
            </div>
        );
    }
}

export default Card;