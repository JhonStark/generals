import React from 'react';
import Header from './components/Header'
import Services from './components/Services'
import Footer2 from './components/Footer2'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Services />
        <Footer2 />
      </header>
    </div>
  );
}

export default App;
