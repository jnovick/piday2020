import React from 'react';
import MathJax from 'react-mathjax';
import { Decimal } from "decimal.js";

export default function Wallis(props) {
  Decimal.set({ precision: props.precision });

  let formula = "\\left(\\frac{2}{1}\\times\\frac{2}{3}\\right)";
  let result = Decimal.div(4, 3);

  for (let i = 2; i <= props.elementsInSequence; i++) {
    result = result.times(4).times(i).times(i).dividedBy(Decimal.mul(2, i).minus(1).times(Decimal.mul(2, i).plus(1)));

    if (i < props.visibleElements || (i === props.elementsInSequence)) {
      formula += `\\times\\left(\\frac{${2 * i}}{${2 * i - 1}}\\times\\frac{${2 * i}}{${2 * i + 1}}\\right)`;
    }
    else if (i === props.visibleElements) {
      formula += `\\times\\ldots`;
    }
  }

  result = result.times(2);
  formula = `2\\times${formula}=${result.toFixed(props.visibleDecimalPoints)}`;
  return <MathJax.Node formula={formula} />
}
