import React, { Component } from 'react';

//import scss folder
import './style.scss';

//import each component
import Header from "./components/HeaderComponent/Header";
import Main from "./components/MainComponent/Main";
import Footer from "./components/FooterComponent/Footer";
import Card from "./components/MainComponent/Card";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Main />
                <Card/>
                <Footer />
            </div>
        );
    }
}

export default App;
