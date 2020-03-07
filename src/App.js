import React from 'react';
import MathJax from 'react-mathjax';
import MadhavaGregoryLeibniz from './approximations/MadhavaGregoryLeibniz'
import Nilakantha from './approximations/Nilakantha'
import Viete from './approximations/Viete'
import Wallis from './approximations/Wallis'
import Madhava from './approximations/Madhava'
import Options from './Options'
import GitHubLog from './Github.png'
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
    precision: 5,
    visibleElements: 3,
    hideLargeElements: true
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
            <span className="EquationLabel">Madhava-Gregory-Leibniz:</span>
            <MadhavaGregoryLeibniz precision={precision} visibleElements={visibleElements} />
          </div>
          <div>
            <span className="EquationLabel">Nilakantha:</span>
            <Nilakantha precision={precision} visibleElements={visibleElements} />
          </div>
          <div>
            <span className="EquationLabel">Viete:</span>
            <Viete precision={precision} visibleElements={visibleElements} hideLargeElements={hideLargeElements} />
          </div>
          <div>
            <span className="EquationLabel">Wallis:</span>
            <Wallis precision={precision} visibleElements={visibleElements} />
          </div>
          <div>
            <span className="EquationLabel">Madhava:</span>
            <Madhava precision={precision} visibleElements={visibleElements} />
          </div>
        </MathJax.Provider>
        <a href="https://github.com/jnovick/piday2020" className="github-btn">
          <img src={GitHubLog} alt="View on GitHub" width="32px" height="32px"/> View on GitHub
        </a>
      </div>
    );
  }
}

export default App;
