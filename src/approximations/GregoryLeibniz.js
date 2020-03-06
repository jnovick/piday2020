import React from 'react';
import MathJax from 'react-mathjax';

export default function GregoryLeibniz(props) {
  let formula = "";
  let result = 0;

  for (let i = 0; i < props.precision; i++) {
    let denominator = 2 * i + 1;

    if (i > 0) {
      if (i % 2 === 1) {
        formula += " - ";
        result -= 4 / denominator;
      }
      else {
        formula += " + ";
        result += 4 / denominator;
      }
    }
    else {
      result += 4;
    }
    formula += `\\frac{1}{${denominator}}`;
  }

  formula = `4 \\left(${formula}\\right)=${result}`;
  return <MathJax.Node formula={formula} />
}
