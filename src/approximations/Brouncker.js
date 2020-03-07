import React from 'react';
import MathJax from 'react-mathjax';
import { Decimal } from "decimal.js";

export default function Brouncker(props) {
  Decimal.set({ precision: props.precision })

  let formula = "";
  let result = Decimal(0);

  if(props.elementsInSequence > props.visibleElements){
    formula = "+\\ldots";
  }

  for (let i = props.elementsInSequence - 1; i >= 0; i--) {
    let numerator = Decimal.mul(2, i).plus(1);
    result = numerator.toPower(2).dividedBy(result.plus(2));

    if (i < props.visibleElements) {
      formula = `+\\frac{${numerator.toNumber()}^{2}}{2${formula}}`;
    }
  }

  result = Decimal.div(4, result.plus(1));
  formula = `\\frac{4}{1${formula}}=${result.toFixed(props.visibleDecimalPoints)}`;
  return <MathJax.Node formula={formula} />
}
