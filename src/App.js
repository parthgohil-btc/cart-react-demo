import React from 'react';
import './App.css';
import Login from '../src/components/Login';
import Dasboard from '../src/components/Dasboard';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
  	<BrowserRouter>
		<div className="App">
          <Route path="/" exact component={Login} />
          <Route path="/dasboard" exact component={Dasboard} />
		</div>
  	</BrowserRouter>
  );
}

export default App;
