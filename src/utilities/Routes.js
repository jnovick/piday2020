import React from 'react';
import MathJax from 'react-mathjax';
import { Switch, Route } from "react-router-dom";
import "./Routes.css";

export default function NavBar(props) {
  let options = {
    tex2jax: {
      inlineMath: []
    },
    CommonHTML: { linebreaks: { automatic: true } },
    "HTML-CSS": { linebreaks: { automatic: true } },
    SVG: { linebreaks: { automatic: true } },
    showMathMenu: true,
    showMathMenuMSIE: true,
    menuSettings: {
      zoom: "Double-Click",
      zscale: `${props.zoomPercent}%`
    },
    displayAlign: "left"
  }

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
        <MathJax.Provider options={options}>
          {wrapApproximation(x[0], x[1])}
        </MathJax.Provider>
      </Route>
    );
  });

  return (
    <Switch>
      {routes}
      <Route path="/">
        <MathJax.Provider options={options}>
          {approximations}
        </MathJax.Provider>
      </Route>
    </Switch>
  )
}
