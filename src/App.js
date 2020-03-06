import React from 'react';
import MathJax from 'react-mathjax';
import GregoryLeibniz from './approximations/GregoryLeibniz'
import Nilakantha from './approximations/Nilakantha'
import Viete from './approximations/Viete'
import Options from './Options'
import './App.css';

const options = {
  tex2jax: {
    inlineMath: []
  },
  CommonHTML: { linebreaks: { automatic: true } },
  "HTML-CSS": { linebreaks: { automatic: true } },
  SVG: { linebreaks: { automatic: true } },
  showMathMenu: false,
  showMathMenuMSIE: false
}

class App extends React.Component {
  state = {
    precision: 4,
    visibleElements: 5,
    hideLargeElements: false
  }

  updateOptions = (values) => {
    this.setState(values);
  }

  render() {
    let { precision, visibleElements, hideLargeElements } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          &pi; <span role="img" aria-label="pi" className="pi">🥧</span> &pi; Happy Pi Day! &pi; <span role="img" aria-label="pi">🥧</span> &pi;
        </header>
        <Options precision={precision} visibleElements={visibleElements} hideLargeElements={hideLargeElements} onUpdate={this.updateOptions} />
        <MathJax.Provider options={options}>
          <div>
            <span className="EquationLabel">Gregory-Leibniz:</span>
            <GregoryLeibniz precision={precision} visibleElements={visibleElements} />
          </div>
          <div>
            <span className="EquationLabel">Nilakantha:</span>
            <Nilakantha precision={precision} visibleElements={visibleElements} />
          </div>
          <div>
            <span className="EquationLabel">Viete:</span>
            <Viete precision={precision} visibleElements={visibleElements} hideLargeElements={hideLargeElements} />
          </div>
        </MathJax.Provider>
      </div>
    );
  }
}

export default App;
