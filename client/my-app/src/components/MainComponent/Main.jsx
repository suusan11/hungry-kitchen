import React, { Component } from 'react';
import { recipeItems } from '../../constants/recipeItems';
import RecipeItem from "./RecipeItem";
import './_main.scss';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <h2>New Recipe</h2>
                <div className="recipeItem">
                {recipeItems.map((recipeItem) => (
                    <RecipeItem
                        key = {recipeItem.title}
                        imageUrl = {recipeItem.imageUrl}
                        title = {recipeItem.title}
                    />
                ))}
                </div>
            </div>
        );
    }
}

export default Main;