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
  showMathMenuMSIE: false,
  displayAlign: "left"
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

    let approximations = [Madhava, MadhavaGregoryLeibniz, Nilakantha, Viete, Wallis]
      .map(X => (
        <div key={X.name}>
          <span className="EquationLabel">{X.name}:</span>
          <span className="Equation">
            <X precision={precision} visibleElements={visibleElements} hideLargeElements={hideLargeElements}/>
          </span>
        </div>
      ));

    return (
      <div className="App">
        <header className="App-header">
          &pi; <span role="img" aria-label="pi" className="pi">🥧</span> &pi; Happy Pi Day! &pi; <span role="img" aria-label="pi">🥧</span> &pi;
        </header>
        <Options precision={precision} visibleElements={visibleElements} hideLargeElements={hideLargeElements} onUpdate={this.updateOptions} />
        <MathJax.Provider options={options}>
          {approximations}
        </MathJax.Provider>
        <a href="https://github.com/jnovick/piday2020" className="github-btn">
          <img src={GitHubLog} alt="View on GitHub" width="32px" height="32px" /> View on GitHub
        </a>
      </div>
    );
  }
}

export default App;
