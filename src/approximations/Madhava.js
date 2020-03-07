import React from 'react';
import MathJax from 'react-mathjax';
import { Decimal } from "decimal.js";

export default function Madhava(props) {
  Decimal.set({ precision: props.precision })

  let formula = "";
  let result = Decimal(0);

  for (let i = 1; i <= props.elementsInSequence; i++) {
    let denominator = Decimal.mul(2, i).plus(1).times(Decimal.pow(3,i));

    if (i > 1) {
      if (i % 2 === 1) {
        if (i <= props.visibleElements || i === props.elementsInSequence) {
          formula += " - ";
        }
        result = result.minus(Decimal.div(1, denominator));
      }
      else {
        if (i <= props.visibleElements || i === props.elementsInSequence) {
          formula += " + ";
        }
        result = result.plus(Decimal.div(1, denominator));
      }
    }
    else {
      result = result.minus(Decimal.div(1, denominator));
    }

    if (i < props.visibleElements || i === props.elementsInSequence) {
      formula += `\\frac{1}{${2*i+1}\\times3^{${i}}}`;
    }
    else if (i === props.visibleElements) {
      formula += `\\ldots`;
    }
  }

  result = result.plus(1).times(Decimal.sqrt(12));
  formula = `\\sqrt{12} \\left(1-${formula}\\right)=${result.toFixed(props.visibleDecimalPoints)}`;
  return <MathJax.Node formula={formula} />
}
