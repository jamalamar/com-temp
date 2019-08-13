import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Style from './App.css'
import Homepage from './Views/HomePage.js'
import Automovil from './Views/Automovil.js'
import Medico from './Views/Medico.js'
import Vida from './Views/Vida.js'
import Nosotros from './Views/Nosotros.js'


function App() {
  return (
	<Router>
	    <div className="App">

	      	<Route path="/" exact component={Homepage}	/>
	      	<Route path="/automovil"  component={Automovil}	/>
	      	<Route path="/medico"  component={Medico}	/>
	      	<Route path="/vida"  component={Vida}	/>
	      	<Route path="/nosotros"  component={Nosotros}	/>
    	
	    </div>
	</Router>
  );
}

export default App;

