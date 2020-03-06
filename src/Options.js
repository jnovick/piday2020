import React from 'react';

export default class Options extends React.Component {
    constructor(props) {
        super();
        this.state = {};
        this.state.precision = props.precision;
        this.state.visibleElements = props.visibleElements;
    }

    onSubmit = (event) => {
        this.props.onUpdate(this.state)
        event.preventDefault();
    }

    render = () => (
        <form onSubmit={this.onSubmit}>
            <label className="OptionsLabel">
                Elements of precision: <input type="number" value={this.state.precision} onChange={e => this.setState({ precision: e.target.value })} />
            </label>
            <label className="OptionsLabel">
                Elements to show: <input type="number" min={2} value={this.state.visibleElements} onChange={e => this.setState({ visibleElements: e.target.value })} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}