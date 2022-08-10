import React from 'react';
import {Game} from "./Components/";
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Footer, HomePage, NavigationBar, Rules} from "./Pages"

function App() {
    return (
        <BrowserRouter>
            <div className="parent-div">
                <NavigationBar/>
                <h1 className="header-name">Tic-Tac-Toe</h1>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/game" element={<Game/>}></Route>
                    <Route path="/rules" element={<Rules/>}></Route>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}
export default App;
