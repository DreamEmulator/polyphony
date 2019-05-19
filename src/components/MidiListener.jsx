import React, {Component} from 'react';
import WebMidi from 'webmidi';

class MidiListener extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        WebMidi.enable( (err) => {

            if (err) {
                console.log("WebMidi could not be enabled.", err);
            } else {
                this.setState({ready: true})
            }

        });
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h4>{this.state.ready && "Midi is ready"}</h4>
            </div>
        );
    }
}

export default MidiListener;
