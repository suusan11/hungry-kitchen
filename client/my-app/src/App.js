import React, { Component } from 'react';

//import scss folder
import './scss/style.scss';

//import each component
import Header from "./components/headerComponent/header";
import Main from "./components/mainComponent/main";
import Footer from "./components/footerComponent/footer";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;
