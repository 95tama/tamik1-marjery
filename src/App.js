import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./content";

function App() {
    const appVersion = '43434';
    const menu = ['About', 'Pricing', 'products']
    return(
        <div className="App">
            <Header version={appVersion} menu={menu}/>
            <Content/>
            <Footer menu={menu}/>

        </div>
    );
}

export default App;
