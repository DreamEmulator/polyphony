import React, {Component} from 'react';

class DebugInfo extends Component {
    render() {
        if (this.props.debug === true) {
            return (
                <div style={style.container}>
                    {this.props.children}
                    <p>To setup: Open Audio Midi Setup > Click Window > Show Midi Studio > Enable the IAC driver </p>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default DebugInfo;

const style = {
    container: {
        position: 'absolute',
        bottom: 0,
        left: 20,
        color: '#fff',
    }
};