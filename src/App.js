import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Style from './App.css'
import Homepage from './Views/HomePage.js'
import Nosotros from './Views/Nosotros.js'
import Automovil from './Views/Automovil.js'
import Medico from './Views/Medico.js'
import Vida from './Views/Vida.js'


class App extends Component {
	
	state = {
		logged: false
	}

render(){
  return (
	<Router>
	    <div className="App">

	      	<Route path="/" exact component={Homepage}	/>
	      	<Route path="/nosotros"  component={Nosotros}	/>
	      	<Route path="/automovil"  component={Automovil}	/>
	      	<Route path="/medico"  component={Medico}	/>
	      	<Route path="/vida"  component={Vida}	/>
    	
	    </div>
	</Router>
  );
}
}

export default App;

