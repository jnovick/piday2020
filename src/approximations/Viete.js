import React from 'react';
import MathJax from 'react-mathjax';

export default function Viete(props) {
  let formula = "\\frac{2}{\\sqrt{2}}";
  let previousFormula = "\\sqrt{2}";
  let result = 2 / Math.sqrt(2);
  let previous = Math.sqrt(2);

  for (let i = 1; i < props.precision; i++) {
    result *= 2 / Math.sqrt(2 + previous)
    previous = Math.sqrt(2 + previous)

    if (i < props.visibleElements - 1 || (i === props.precision - 1 && !props.hideLargeElements)) {
      formula += `\\times\\frac{2}{\\sqrt{2+${previousFormula}}}`;
    }
    else if (i === props.visibleElements - 1) {
      formula += `\\times\\ldots`;
    }

    previousFormula = `\\sqrt{2+${previousFormula}}`;
  }

  formula = `2\\times${formula}=${2 * result}`;
  return <MathJax.Node formula={formula} />
}
