import React from 'react';

export default class Options extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    this.state.precision = props.precision;
    this.state.visibleElements = props.visibleElements;
    this.state.hideLargeElements = props.hideLargeElements;
  }

  onSubmit = (event) => {
    this.props.onUpdate(this.state)
    event.preventDefault();
  }

  render = () => (
    <form onSubmit={this.onSubmit}>
      <label className="OptionsLabel">
        Elements of precision: <input type="number" min={1} value={this.state.precision} onChange={e => this.setState({ precision: e.target.valueAsNumber })} />
      </label>
      <label className="OptionsLabel">
        Elements to show: <input type="number" min={2} value={this.state.visibleElements} onChange={e => this.setState({ visibleElements: e.target.valueAsNumber })} />
      </label>
      <label className="OptionsLabel">
        Hide large final elements? <input type="checkbox" checked={this.state.hideLargeElements} onChange={e => this.setState({ hideLargeElements: e.target.checked })} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
