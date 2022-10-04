import React from 'react';
import './App.css';
import Ad from './components/Ad';
import AdDesigner from './components/AdDesigner';
import Header from './components/Header';
import Votes from './components/Votes';

function App() {
  return (
    <div className="App">
      <Header user='Chirpus'></Header>
      <Ad flavor="Chocolate" fontSize={10} darkTheme={true}></Ad>
      <Ad flavor="Strawberry" fontSize={50} darkTheme={false}></Ad>
      <Ad flavor="Vanilla" fontSize={25} darkTheme={true}></Ad>
      <AdDesigner></AdDesigner>
      <Votes></Votes>
    </div>
  );
}

export default App;
