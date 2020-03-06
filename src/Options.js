import React from 'react';

export default function Options(props){
    return (
    <label>
      Elements of precision: <input type="number" value={props.precision} onChange={props.onUpdate} />
    </label>
    )
}