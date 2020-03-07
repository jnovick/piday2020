import React from 'react';
import MathJax from 'react-mathjax';
import { Decimal } from "decimal.js";

export default function MadhavaGregoryLeibniz(props) {
  Decimal.set({ precision: props.precision });

  let formula = "";
  let result = Decimal(0);

  for (let i = 0; i < props.elementsInSequence; i++) {
    let denominator = 2 * i + 1;
    let delta = Decimal(4).dividedBy(denominator)

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
      result = result.plus(4);
    }

    if (i < props.visibleElements - 1 || i === props.elementsInSequence - 1) {
      formula += `\\frac{1}{${denominator}}`;
    }
    else if (i === props.visibleElements - 1) {
      formula += `\\ldots`;
    }
  }

  formula = `4 \\left(${formula}\\right)=${result.toFixed(props.visibleDecimalPoints)}`;
  return <MathJax.Node formula={formula} />
}
