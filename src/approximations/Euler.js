import React from 'react';
import MathJax from 'react-mathjax';

export default function Euler(props) {
  let formula = "\\frac{1}{1^{2}}";
  let result = 1;

  for (let i = 2; i <= props.precision; i++) {
    result += 1 / Math.pow(i, 2);
    if (i < props.visibleElements || i === props.precision) {
      formula += `+\\frac{1}{${i}^{2}}`;
    }
    else if (i === props.visibleElements) {
      formula += `+\\ldots`;
    }
  }

  result = Math.sqrt(6 * result);
  formula = `\\sqrt{6\\left(${formula}\\right)}=${result}`;
  return <MathJax.Node formula={formula} />
}
