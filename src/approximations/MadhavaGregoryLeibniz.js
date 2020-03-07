import React from 'react';
import MathJax from 'react-mathjax';

export default function MadhavaGregoryLeibniz(props) {
  let formula = "";
  let result = 0;

  for (let i = 0; i < props.elementsInSequence; i++) {
    let denominator = 2 * i + 1;

    if (i > 0) {
      if (i % 2 === 1) {
        if (i <= props.visibleElements - 1 || i === props.elementsInSequence - 1) {
          formula += " - ";
        }
        result -= 4 / denominator;
      }
      else {
        if (i <= props.visibleElements - 1 || i === props.elementsInSequence - 1) {
          formula += " + ";
        }
        result += 4 / denominator;
      }
    }
    else {
      result += 4;
    }

    if (i < props.visibleElements - 1 || i === props.elementsInSequence - 1) {
      formula += `\\frac{1}{${denominator}}`;
    }
    else if (i === props.visibleElements - 1) {
      formula += `\\ldots`;
    }
  }

  formula = `4 \\left(${formula}\\right)=${result}`;
  return <MathJax.Node formula={formula} />
}
