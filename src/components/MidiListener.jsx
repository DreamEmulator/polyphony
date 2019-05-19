import React, {Component} from 'react';
import WebMidi from  'webMidi';

class webMidi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: "false",
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h4>{this.state.ready}</h4>
            </div>
        );
    }
}

export default webMidi;
