import React from 'react';
import MathJax from 'react-mathjax';
import { Decimal } from "decimal.js";

export default function Newton(props) {
  Decimal.set({ precision: props.precision })

  let formula = "";
  let result = Decimal(0);

  if(props.elementsInSequence > props.visibleElements){
    formula = "\\ldots";
  }

  for (let i = props.elementsInSequence; i > 0; i--) {
    let denominator = Decimal.mul(2, i).plus(1);
    result = result.times(i).dividedBy(denominator).plus(1);

    if (i <= props.visibleElements) {
      formula = `\\frac{${i}}{${denominator.toNumber()}}\\left(1+${formula}\\right)`;
    }
  }

  result = result.times(2)
  formula = `2\\left(${formula}\\right)=${result.toFixed(props.visibleDecimalPoints)}`;
  return <MathJax.Node formula={formula} />
}
