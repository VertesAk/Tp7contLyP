import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalCounter = () => {
  const [text, setText] = useState('');
  const [ContarLetra, setcontarLetra] = useState(0);
  const [ContarPalabra, setcontarPalabra] = useState(0);
  const MaxLetras = 100;

  useEffect(() => {
    setcontarLetra(text.length);
    setcontarPalabra(text.split(/\s+/).filter(palabra => palabra !== '').length);
  }, [text]);

  const handleChange = event => {
    if (event.target.value.length <= MaxLetras) {
      setText(event.target.value);
    }
  };

  return (
    <div  className='App'>
      <header className='App-header'>
      <h1> Contador:Letras y Palabras</h1>
      <textarea   style={{ height: '200px', width: '300px',   border: '4px solid darkgreen',
          borderRadius: '10px', padding: '10px' }} value={text} onChange={handleChange} />
      <p> Cantidad de caracteres:
        {ContarLetra}/{MaxLetras} 
        <p>Cantidad de palabras:{ContarPalabra} palabras</p>
      </p>
      {ContarLetra >= MaxLetras && alert("Has alcanzado el limite de caracteres") }
      </header>
    </div>
  );
};

export default GlobalCounter;