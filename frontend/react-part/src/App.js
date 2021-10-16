import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; // don't forget to npm i react-router-dom
import Header from "./components/Header";
import Navbar_bootstrap from "./components/Navbar_bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function App() {

const [tasks, setTasks] = useState([]);

  return (  
    <div>
      <Navbar_bootstrap />
      <div className="toDoListBox">
        <Header 
        />
      </div>
    </div>
  );
}

export default App;
