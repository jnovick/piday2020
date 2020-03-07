import React from 'react';
import MathJax from 'react-mathjax';
import MadhavaGregoryLeibniz from './approximations/MadhavaGregoryLeibniz'
import Nilakantha from './approximations/Nilakantha'
import Viete from './approximations/Viete'
import Wallis from './approximations/Wallis'
import Madhava from './approximations/Madhava'
import Brouncker from './approximations/Brouncker'
import Euler from './approximations/Euler'
import Newton from './approximations/Newton'
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
    elementsInSequence: 5,
    visibleElements: 3,
    precision: 20,
    visibleDecimalPoints: 5
  }

  updateOptions = (values) => {
    this.setState(values);
  }

  render() {
    let { elementsInSequence, visibleElements, precision, visibleDecimalPoints } = this.state;

    let approximations = Object.entries({
      "Lord Brouncker": Brouncker,
      "Madhava-Gregory-Leibniz": MadhavaGregoryLeibniz,
      "Euler": Euler,
      "Wallis": Wallis,
      "Nilakantha": Nilakantha,
      "Newton / Euler Convergence Transformation": Newton,
      "Mandava": Madhava,
      "Viète": Viete,
    }).map(x => {
      let key = x[0];
      let Value = x[1];
      return (
        <div key={key}>
          <span className="EquationLabel">{key}:</span>
          <span className="Equation">
            <Value elementsInSequence={elementsInSequence} visibleElements={visibleElements} precision={precision} visibleDecimalPoints={visibleDecimalPoints} />
          </span>
        </div>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          &pi; <span role="img" aria-label="pi" className="pi">🥧</span> &pi; Happy Pi Day! &pi; <span role="img" aria-label="pi">🥧</span> &pi;
        </header>
        <Options elementsInSequence={elementsInSequence} visibleElements={visibleElements} onUpdate={this.updateOptions} precision={precision} visibleDecimalPoints={visibleDecimalPoints} />
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
