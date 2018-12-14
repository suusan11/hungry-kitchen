import React, { Component } from 'react';
import { recipeItems } from '../../constants/recipeItems';


class Main extends Component {
    render() {
        return (
            <div className="main">
                <h2>New Recipe</h2>
                {recipeItems.map((recipeItem) => (
                    <recipeItem
                        key = {recipeItem.title}
                        imageUrl = {recipeItem.imageUrl}
                        title = {recipeItem.title}
                    />
                ))}
            </div>
        );
    }
}

export default Main;