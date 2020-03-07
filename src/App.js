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

import Options from './utilities/Options'
import GitHubLog from './Github.png'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const options = {
  tex2jax: {
    inlineMath: []
  },
  CommonHTML: { linebreaks: { automatic: true } },
  "HTML-CSS": { linebreaks: { automatic: true } },
  SVG: { linebreaks: { automatic: true } },
  showMathMenu: true,
  showMathMenuMSIE: true,
  menuSettings: {
    zoom: "Double-Click"
  },
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

    let approximationsDict = {
      "Lord Brouncker": Brouncker,
      "Madhava-Gregory-Leibniz": MadhavaGregoryLeibniz,
      "Euler": Euler,
      "Wallis": Wallis,
      "Nilakantha": Nilakantha,
      "Newton / Euler Convergence Transformation": Newton,
      "Mandava": Madhava,
      "Viète": Viete
    };

    let approximations = Object.entries(approximationsDict).map(x => this.wrapApproximation(x[0], x[1], true));
    let links = Object.keys(approximationsDict).map(x => {
      return (
        <li key={x}>
          <NavLink to={"/" + x} activeClassName="active">{x}</NavLink>
        </li>
      );
    });

    let routes = Object.entries(approximationsDict).map(x => {
      return (
        <Route path={"/" + x[0]} key={x}>
          <MathJax.Provider options={options}>
            {this.wrapApproximation(x[0], x[1])}
          </MathJax.Provider>
        </Route>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          &pi; <span role="img" aria-label="pi" className="pi">🥧</span> &pi; Happy Pi Day! &pi; <span role="img" aria-label="pi">🥧</span> &pi;
        </header>

        <Router>
          <div>
            <nav>
              <ul>
                <li key="all">
                  <NavLink exact to="/" activeClassName="active">All</NavLink>
                </li>
                {links}
              </ul>
            </nav>

            <Options elementsInSequence={elementsInSequence} visibleElements={visibleElements} onUpdate={this.updateOptions} precision={precision} visibleDecimalPoints={visibleDecimalPoints} />

            <Switch>
              {routes}
              <Route path="/">
                <MathJax.Provider options={options}>
                  {approximations}
                </MathJax.Provider>
              </Route>
            </Switch>
          </div>
        </Router>
        <a href="https://github.com/jnovick/piday2020" className="github-btn">
          <img src={GitHubLog} alt="View on GitHub" width="32px" height="32px" /> View on GitHub
        </a>
      </div>
    );
  }

  wrapApproximation(key, Approximation, addTitle) {
    let { elementsInSequence, visibleElements, precision, visibleDecimalPoints } = this.state;

    return <div key={key}>
      {addTitle && <span className="EquationLabel">{key}:</span>}
      <span className="Equation">
        <Approximation
          elementsInSequence={elementsInSequence}
          visibleElements={visibleElements}
          precision={precision}
          visibleDecimalPoints={visibleDecimalPoints} />
      </span>
    </div>;
  }
}

export default App;
