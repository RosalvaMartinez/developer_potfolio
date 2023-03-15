import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';

import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
