import React from 'react';
import MathJax from 'react-mathjax';
import { Switch, Route } from "react-router-dom";
import "./Routes.css";

export default function NavBar(props) {
  let wrapApproximation = (key, Approximation, addTitle) => {
    let { elementsInSequence, visibleElements, precision, visibleDecimalPoints } = props;
  
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

  let approximations = Object.entries(props.approximations)
    .map(x => wrapApproximation(x[0], x[1], true));

  let routes = Object.entries(props.approximations).map(x => {
    return (
      <Route path={"/" + x[0]} key={x}>
        <MathJax.Provider options={props.options}>
          {wrapApproximation(x[0], x[1])}
        </MathJax.Provider>
      </Route>
    );
  });

  return (
    <Switch>
      {routes}
      <Route path="/">
        <MathJax.Provider options={props.options}>
          {approximations}
        </MathJax.Provider>
      </Route>
    </Switch>
  )
}
