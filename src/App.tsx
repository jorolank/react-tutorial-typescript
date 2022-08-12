import React from 'react';
import {Game} from "./Components/";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About, Footer, NavigationBar, PageNotFound, Rules} from "./Pages"


function App() {
    return (
        <BrowserRouter>
            <div className="parent-div">
                <NavigationBar/>
                <Routes>
                    <Route path="*" element={<PageNotFound/>}></Route>
                    <Route path="/" element={<About/>}></Route>
                    <Route path="/game" element={<Game/>}></Route>
                    <Route path="/rules" element={<Rules/>}></Route>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}
export default App;
