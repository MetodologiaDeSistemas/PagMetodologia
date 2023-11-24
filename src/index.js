import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
       <App/>
    </BrowserRouter>

);

/*1-cear la rama git checkout -b Agustin; ver git branch
2-hacerle modificaciones
3-hacer add y commit
4-hacer un push desde esta rama**
5-moverse a la rama donde se quiere actualizar las modificaciones hechas en la otra rama 
6-hacer un merge para fucionar las ramas 
7-hacer el push del main con los cambios realizados */