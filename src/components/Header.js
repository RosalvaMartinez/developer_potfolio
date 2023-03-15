import Navigation from "./Navigation";
import React from "react";
import {
    Link
} from "react-router-dom";

function Header() {
    return (
        <header className=" bg-slate-400 flex flex-row justify-between bg-primary text-light py-3">
            <Link to="/">
                <h1 className="font-serif font-bold text-2xl p-6">
                    Rosalva Hazel Martinez
                </h1>
            </Link>
            <Navigation />
        </header>
    );
}

export default Header;
