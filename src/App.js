import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => {
  useEffect(() => {
    //initiates Materialize Javascript
    M.AutoInit();
  });
  return (
    <div className='App'>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
