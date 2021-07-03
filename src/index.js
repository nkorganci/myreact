//Main library of react
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
//Adding app module
import App from './App';

//Rendering element: what you want to see on the screen or updating
//Render gets two parameter: 1-What to do render

ReactDOM.render(
<div>
 <App />
 <App />
</div>{/* calling app module*/}
   
  ,
  document.getElementById('root')
);

