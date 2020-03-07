import React from 'react';
import MathJax from 'react-mathjax';
import { Decimal } from "decimal.js";

export default function Viete(props) {
  Decimal.set({ precision: props.precision });

  let formula = "\\frac{2}{\\sqrt{2}}";
  let previousFormula = "\\sqrt{2}";
  let result = Decimal.div(2, Decimal.sqrt(2));
  let previous = Decimal.sqrt(2);

  for (let i = 1; i < props.elementsInSequence; i++) {
    result = result.times(2).dividedBy(Decimal.sqrt(previous.plus(2)));
    previous = Decimal.sqrt(previous.plus(2))

    if (i < props.visibleElements) {
      formula += `\\times\\frac{2}{\\sqrt{2+${previousFormula}}}`;
    }
    else if (i === props.visibleElements) {
      formula += `\\times\\ldots`;
    }

    previousFormula = `\\sqrt{2+${previousFormula}}`;
  }

  result = result.times(2);
  formula = `2\\times${formula}=${result.toFixed(props.visibleDecimalPoints)}`;
  return <MathJax.Node formula={formula} />
}
