import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import './App.css'; // Para estilos globais e do main

const App: React.FC = () => {
  return (
    <main>
      <Header />
      <Home />
      <About />
      <Projects />
      {/* Footer será adicionado se houver no original, mas não foi encontrado no index.html */}
    </main>
  );
};

export default App;
