import React from 'react';
import MathJax from 'react-mathjax';
import { Decimal } from "decimal.js";

export default function Nilakantha(props) {
  Decimal.set({ precision: props.precision });

  let formula = "";
  let result = Decimal(3);

  for (let i = 0; i < props.elementsInSequence; i++) {
    let denominator = Decimal.mul(2, i).plus(2);
    let delta = Decimal.div(4, Decimal(denominator).times(denominator.plus(1)).times(denominator.plus(2)));
    if (i > 0) {
      if (i % 2 === 1) {
        if (i <= props.visibleElements - 1 || i === props.elementsInSequence - 1) {
          formula += " - ";
        }
        result = result.minus(delta);
      }
      else {
        if (i <= props.visibleElements - 1 || i === props.elementsInSequence - 1) {
          formula += " + ";
        }
        result = result.plus(delta);
      }
    }
    else {
      result = result.plus(delta);
    }

    if (i < props.visibleElements - 1 || i === props.elementsInSequence - 1) {
      formula += `\\frac{1}{${denominator}\\times${denominator.plus(1)}\\times${denominator.plus(2)}}`;
    }
    else if (i === props.visibleElements - 1) {
      formula += `\\ldots`;
    }
  }

  formula = `3 + 4 \\left(${formula}\\right)=${result.toFixed(props.visibleDecimalPoints)}`;
  return <MathJax.Node formula={formula} />
}
