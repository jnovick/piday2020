import React from 'react';
import MathJax from 'react-mathjax';
import MadhavaGregoryLeibniz from './approximations/MadhavaGregoryLeibniz'
import Nilakantha from './approximations/Nilakantha'
import Viete from './approximations/Viete'
import Wallis from './approximations/Wallis'
import Madhava from './approximations/Madhava'
import Brouncker from './approximations/Brouncker'
import Euler from './approximations/Euler'
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

    let approximations = Object.entries({
      "Madhava-Gregory-Leibniz": MadhavaGregoryLeibniz,
      "Nilakantha": Nilakantha,
      "Viète": Viete,
      "Wallis": Wallis,
      "Mandava": Madhava,
      "Lord Brouncker": Brouncker,
      "Euler": Euler,
    }).map(x => {
      let key = x[0];
      let Value = x[1];
      return (
        <div key={key}>
          <span className="EquationLabel">{key}:</span>
          <span className="Equation">
            <Value precision={precision} visibleElements={visibleElements} hideLargeElements={hideLargeElements} />
          </span>
        </div>
      );
    });

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
