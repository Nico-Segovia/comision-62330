import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Upper CamelCase for components
import './index.css'

/*
En JS se utilizaba:
const rootElement = document.getElementById('root');

Esto agarraba el <div id="root"></div>, que está en el html.
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
) // Aca le pedimos que haga un render de lo que esta dentro. LO que importa es el <App /> 

/*
<App /> 
Es un componente de React, que lo importamos desde:

import App from './App.jsx'

.jsx es la extención del código que se escribe en React.
*/