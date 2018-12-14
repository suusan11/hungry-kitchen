import React, { Component } from 'react';

//import scss folder
import './style.scss';

//import each component
import Header from "./components/HeaderComponent/Header";
import Main from "./components/MainComponent/Main";
import Footer from "./components/FooterComponent/Footer";
import RecipeItem from "./components/MainComponent/RecipeItem";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Main />
                <RecipeItem/>
                <Footer />
            </div>
        );
    }
}

export default App;
