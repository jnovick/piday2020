import React from 'react';

export default class Options extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    this.state.elementsInSequence = props.elementsInSequence;
    this.state.visibleElements = props.visibleElements;
  }

  onSubmit = (event) => {
    this.props.onUpdate(this.state)
    event.preventDefault();
  }

  render = () => (
    <form onSubmit={this.onSubmit}>
      <label className="OptionsLabel">
        Elements In Sequence: <input type="number" min={1} value={this.state.elementsInSequence} onChange={e => this.setState({ elementsInSequence: e.target.valueAsNumber })} />
      </label>
      <label className="OptionsLabel">
        Elements to show: <input type="number" min={2} value={this.state.visibleElements} onChange={e => this.setState({ visibleElements: e.target.valueAsNumber })} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
