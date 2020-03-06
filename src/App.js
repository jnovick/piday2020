import React from 'react';
import MathJax from 'react-mathjax';
import GregoryLeibniz from './approximations/GregoryLeibniz'
import './App.css';

const options= {
  tex2jax: {
      inlineMath: []
  },
  CommonHTML: { linebreaks: { automatic: true } },
  "HTML-CSS": { linebreaks: { automatic: true } },
  SVG: { linebreaks: { automatic: true } },   
  showMathMenu: false,
  showMathMenuMSIE: false
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MathJax.Provider options={options}>
          <GregoryLeibniz precision={10} />
        </MathJax.Provider>
      </header>
    </div>
  );
}

export default App;
