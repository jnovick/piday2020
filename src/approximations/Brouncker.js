import React from 'react';
import MathJax from 'react-mathjax';

export default function Brouncker(props) {
  let formula = "";
  let result = 0;

  if(props.elementsInSequence > props.visibleElements){
    formula = "+\\ldots";
  }

  for (let i = props.elementsInSequence - 1; i >= 0; i--) {
    let numerator = 2 * i + 1;
    result = Math.pow(numerator, 2) / (2 + result);

    if (i < props.visibleElements) {
      formula = `+\\frac{${numerator}^{2}}{2${formula}}`;
    }
  }

  formula = `\\frac{4}{1${formula}}=${4 / (1 + result)}`;
  return <MathJax.Node formula={formula} />
}
