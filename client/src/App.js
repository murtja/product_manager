import React from 'react';
import './App.css';
import Main from './Views/Main'
import Detail from './Views/Details';
import {Router} from '@reach/router';
import Update from './Views/Update'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Detail path="/:id"/>
        <Update path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
