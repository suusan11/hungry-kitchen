import React, { Component }from 'react';

export default class RecipeItem extends Component {
    render(){
        const { imageUrl, title } = this.props;

        return(
                <div className="card">
                    <a href='# '>
                        <img src={ imageUrl } alt=""/>
                        <h3>{ title }</h3>
                    </a>
                </div>
        );
    }
}