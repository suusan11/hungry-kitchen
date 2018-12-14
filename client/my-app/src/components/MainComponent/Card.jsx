import React, { Component }from 'react';

export default class Card extends Component {
    render(){
        const { imageURL, title } = this.props;

        return(
            <div className="cards">
                <div className="card">
                    <img src={imageURL} alt=""/>
                    <h2>{ title }</h2>
                </div>
                <div className="card">
                    <img src={imageURL} alt=""/>
                    <h2>{ title }</h2>
                </div>
                <div className="card">
                    <img src={imageURL} alt=""/>
                    <h2>{ title }</h2>
                </div>
            </div>
        );
    }
}