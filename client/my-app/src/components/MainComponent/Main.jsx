import React, { Component } from 'react';
import { recipeItems } from '../../constants/recipeItems';
import RecipeItem from "./RecipeItem";
import './_main.scss';
import Container from "../../Container/Container";
import '../../Container/Container.scss';
import recipeIcon from '../../assets/images/recipeicon.png';


class RecipeButton extends Component {
 render() {
     return(
         <button>See More</button>
     );
 }
}

class Main extends Component {
    render() {
        return (
            <Container>
                <div className="main">
                    <img src={ recipeIcon } alt="recipe icon"/>
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
                    <RecipeButton />
                </div>
            </Container>
        );
    }
}

export default Main;