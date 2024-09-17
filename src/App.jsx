import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import VendingMachine from './VendingMachine';

function App() {

  return (
    <>
      <VendingMachine />  
    </>
  );
};

export default App
