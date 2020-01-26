import React from 'react';
import Tarjeta  from  './componentes/Tarjeta/Tarjeta'
import logo from './logo.svg';
import './App.css';

const Helloworld = ( props ) =><h1>Hola mundo</h1>;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Helloworld/>
        <Tarjeta price={5.00}></Tarjeta>
      </header>
    </div>
  );
}

export default App;
