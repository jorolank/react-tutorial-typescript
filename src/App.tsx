import React from 'react';
import {Game} from "./Components/index";
import "./App.css"
import ColorSchemesExample from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Rules from "./Pages/Rules/rules";
import HomePage from "./Pages/Home/home";

function App() {
    return (
        <BrowserRouter>
            <div className="parent-div">
                <ColorSchemesExample/>
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
