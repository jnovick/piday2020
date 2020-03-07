import React from 'react';

import MadhavaGregoryLeibniz from './approximations/MadhavaGregoryLeibniz'
import Nilakantha from './approximations/Nilakantha'
import Viete from './approximations/Viete'
import Wallis from './approximations/Wallis'
import Madhava from './approximations/Madhava'
import Brouncker from './approximations/Brouncker'
import Euler from './approximations/Euler'
import Newton from './approximations/Newton'

import Options from './utilities/Options'
import NavBar from './utilities/NavBar'
import Routes from './utilities/Routes'

import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

class App extends React.Component {
  state = {
    elementsInSequence: 5,
    visibleElements: 3,
    precision: 20,
    visibleDecimalPoints: 5,
    zoomPercent: 600
  }

  updateOptions = (values) => {
    this.setState(values);
  }

  render() {
    let { elementsInSequence, visibleElements, precision, visibleDecimalPoints, zoomPercent } = this.state;

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

    return (
      <div className="App">
        <header className="App-header">
          &pi; <span role="img" aria-label="pi" className="pi">🥧</span> &pi; Happy Pi Day! &pi; <span role="img" aria-label="pi">🥧</span> &pi;
        </header>

        <Router>
          <div>
            <NavBar approximations={approximationsDict} />
            <Options
              elementsInSequence={elementsInSequence}
              visibleElements={visibleElements}
              visibleDecimalPoints={visibleDecimalPoints}
              precision={precision}
              zoomPercent={zoomPercent}
              onUpdate={this.updateOptions} />
            <Routes
              elementsInSequence={elementsInSequence}
              visibleElements={visibleElements}
              visibleDecimalPoints={visibleDecimalPoints}
              precision={precision}
              zoomPercent={zoomPercent}
              approximations={approximationsDict} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
