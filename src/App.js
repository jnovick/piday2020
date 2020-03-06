import React from 'react';
import MathJax from 'react-mathjax';
import GregoryLeibniz from './approximations/GregoryLeibniz'
import Nilakantha from './approximations/Nilakantha'
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
    precision: 3
  }

  updatePrecision(event) {
    this.setState({ precision: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <label>
            Elements of precision: <input type="number" value={this.state.precision} onChange={this.updatePrecision.bind(this)} />
          </label>
          <MathJax.Provider options={options}>
            <GregoryLeibniz precision={this.state.precision} />
            <Nilakantha precision={this.state.precision} />
          </MathJax.Provider>
        </header>
      </div>
    );
  }
}

export default App;
