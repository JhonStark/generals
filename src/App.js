import React from 'react';
import Header from './components/Header'
import Services from './components/Services'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Services />
        <Footer />
      </header>
    </div>
  );
}

export default App;
