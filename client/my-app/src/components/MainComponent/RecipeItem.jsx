import React, { Component }from 'react';

export default class RecipeItem extends Component {
    render(){
        const { imageUrl, title } = this.props;

        return(
            <div className="recipeItem">
                <div className="card">
                    <img src={imageUrl} alt=""/>
                    <h2>{ title }</h2>
                </div>
            </div>
        );
    }
}