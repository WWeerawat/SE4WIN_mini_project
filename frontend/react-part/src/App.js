import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; // don't forget to npm i react-router-dom
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
        <Header/>
    </div>
  );
}

export default App;
