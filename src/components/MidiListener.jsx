import React, {Component, Fragment} from 'react';
import WebMidi from 'webmidi';
import DebugInfo from "./DebugInfo";
import Canvas from "./Canvas";

class MidiListener extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            inputs: null,
            outputs: null,
            midi: null,
            midiNote: null,
            note: null,
            octave: null,
        }
        this.midiEvents = React.createRef();
        this.DEBUG = true;
    }

    componentDidMount() {
        WebMidi.enable((err) => {

            if (err) {
                console.log("WebMidi could not be enabled.", err);
            } else {
                this.setState({
                    ready: true,
                    inputs: WebMidi.inputs.length
                });
                WebMidi.inputs[0] && this.bindEvents();
            }
            console.log(WebMidi)
        }, true);
    }

    bindEvents() {

        const input = WebMidi.inputs[0];

        input.addListener("noteon", "all", e => {
            this.setState({midi: e.data, midiNote: e.data[1], note: e.note.name, octave: e.note.octave, bonus: e.data[0]});
            this.midiEvents.current.size(this.state.octave);
            this.midiEvents.current.color(this.state.midiNote);
            this.midiEvents.current.drawLissajous(Math.ceil(this.state.midiNote / this.state.octave)/2, Math.ceil(this.state.midiNote * this.state.octave)/20);
        });

        input.addListener("pitchbend", "all", e => {
            console.log(e);
        });

        input.addListener("noteoff", "all", e => {
            // this.sizeDown();
        });
    }



    render() {
        return (
            <Fragment>
                <Canvas ref={this.midiEvents}/>
                <DebugInfo debug={this.DEBUG}>
                    <h4>{this.state.ready && "Midi is ready with " + this.state.inputs + " inputs"}</h4>
                    <h5>{"Note: " + this.state.note}</h5>
                    <h5>{"Octave: " + this.state.octave}</h5>
                    <a href={"http://djipco.github.io/webmidi/latest/classes/WebMidi.html"}>Docs</a>
                </DebugInfo>
            </Fragment>
        );
    }
}

export default MidiListener;
