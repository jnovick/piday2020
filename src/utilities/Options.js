import React from 'react';
import './Options.css';

export default class Options extends React.Component {
  constructor(props) {
    super();
    this.state = {...props};
  }

  onSubmit = (event) => {
    this.props.onUpdate(this.state)
    event.preventDefault();
  }

  render = () => (
    <form onSubmit={this.onSubmit} className="Options">
      <label className="OptionsLabel">
        Elements In Sequence: <input type="number" min={1} value={this.state.elementsInSequence} onChange={e => this.setState({ elementsInSequence: e.target.valueAsNumber })} />
      </label>
      <label className="OptionsLabel">
        Elements To Show: <input type="number" min={2} value={this.state.visibleElements} onChange={e => this.setState({ visibleElements: e.target.valueAsNumber })} />
      </label>
      <label className="OptionsLabel">
        Calculation Precision: <input type="number" min={10} value={this.state.precision} onChange={e => this.setState({ precision: e.target.valueAsNumber })} />
      </label>
      <label className="OptionsLabel">
        Visible Decimal Points: <input type="number" min={0} value={this.state.visibleDecimalPoints} onChange={e => this.setState({ visibleDecimalPoints: e.target.valueAsNumber })} />
      </label>
      <label className="OptionsLabel">
        Double-click Zoom Percent: <input type="number" min={100} value={this.state.zoomPercent} onChange={e => this.setState({ zoomPercent: e.target.valueAsNumber })} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
