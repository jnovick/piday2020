import React from 'react';
import MathJax from 'react-mathjax';

export default function Wallis(props) {
  let formula = "\\left(\\frac{2}{1}\\times\\frac{2}{3}\\right)";
  let result = 4/3;

  for (let i = 2; i <= props.elementsInSequence; i++) {
    result *= (4 * i * i) / ((2*i-1)*(2*i+1));

    if (i < props.visibleElements || (i === props.elementsInSequence)) {
      formula += `\\times\\left(\\frac{${2*i}}{${2*i-1}}\\times\\frac{${2*i}}{${2*i+1}}\\right)`;
    }
    else if (i === props.visibleElements) {
      formula += `\\times\\ldots`;
    }
  }

  formula = `2\\times${formula}=${2 * result}`;
  return <MathJax.Node formula={formula} />
}
