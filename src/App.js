import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Style from './App.css'
import Homepage from './Views/HomePage.js'
import About from './Views/About.js'


function App() {
  return (
	<Router>
	    <div className="App">

	      	<Route path="/" exact component={Homepage}	/>
	      	<Route path="/about"  component={About}	/>
    	
	    </div>
	</Router>
  );
}

export default App;

