import React from 'react';
import './App.css'

const App = () =>{
   const message = "Hello world!";

   return (
    <>

        <div className="container">{message}</div>
        <button onClick={() => (message = "heloooooooo")}>
            mudar mensagem
        </button>
   </>
   );
 };
export default App
