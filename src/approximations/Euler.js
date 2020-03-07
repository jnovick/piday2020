import React from 'react';
import MathJax from 'react-mathjax';
import { Decimal } from "decimal.js";

export default function Euler(props) {
  Decimal.set({ precision: props.precision })
  let formula = "\\frac{1}{1^{2}}";
  let result = Decimal(1);

  for (let i = 2; i <= props.elementsInSequence; i++) {
    result = result.plus(Decimal.div(1, Decimal.pow(i, 2)));
    
    if (i < props.visibleElements || i === props.elementsInSequence) {
      formula += `+\\frac{1}{${i}^{2}}`;
    }
    else if (i === props.visibleElements) {
      formula += `+\\ldots`;
    }
  }

  result = Decimal.sqrt(result.times(6));
  formula = `\\sqrt{6\\left(${formula}\\right)}=${result.toFixed(props.visibleDecimalPoints)}`;
  return <MathJax.Node formula={formula} />
}
