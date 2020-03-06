import React from 'react';
import MathJax from 'react-mathjax';

export default function Nilakantha(props) {
  let formula = "";
  let result = 3;

  for (let i = 0; i < props.precision; i++) {
    let denominator = 2 * i + 2;
    let delta = 4 / denominator / (denominator + 1) / (denominator + 2);
    if (i > 0) {
      if (i % 2 === 1) {
        formula += " - ";
        result -= delta;
      }
      else {
        formula += " + ";
        result += delta;
      }
    }
    else {
      result += delta;
    }
    formula += `\\frac{1}{${denominator}\\times${denominator + 1}\\times${denominator + 2}}`;
  }

  formula = `3 + 4 \\left(${formula}\\right)=${result}`;
  return <MathJax.Node formula={formula} />
}