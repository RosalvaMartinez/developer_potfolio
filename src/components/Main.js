import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

function Main() {
    return (
        <div className=" bg-slate-500 flex flex-col flex-grow justify-between p-10">
            <Routes>
                <Route path='/' element={<AboutMe />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    );
}

export default Main;
