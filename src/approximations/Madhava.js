import React from 'react';
import MathJax from 'react-mathjax';

export default function Madhava(props) {
  let formula = "";
  let result = 0;

  for (let i = 1; i <= props.elementsInSequence; i++) {
    let denominator = (2 * i + 1) * Math.pow(3,i);

    if (i > 1) {
      if (i % 2 === 1) {
        if (i <= props.visibleElements || i === props.elementsInSequence) {
          formula += " - ";
        }
        result -= 1 / denominator;
      }
      else {
        if (i <= props.visibleElements || i === props.elementsInSequence) {
          formula += " + ";
        }
        result += 1 / denominator;
      }
    }
    else {
      result -= 1 / denominator;
    }

    if (i < props.visibleElements || i === props.elementsInSequence) {
      formula += `\\frac{1}{${2*i+1}\\times3^{${i}}}`;
    }
    else if (i === props.visibleElements) {
      formula += `\\ldots`;
    }
  }

  result = Math.sqrt(12)*(1+result);
  formula = `\\sqrt{12} \\left(1-${formula}\\right)=${result}`;
  return <MathJax.Node formula={formula} />
}
