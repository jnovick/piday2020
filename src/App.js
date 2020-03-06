import React from 'react';
import MathJax from 'react-mathjax';
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
          <MathJax.Node formula={"4 \\left(\\frac{1}{1} - \\frac{1}{3}\\right)"} />
        </MathJax.Provider>
      </header>
    </div>
  );
}

export default App;
