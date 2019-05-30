import React, {Component} from 'react';

class DebugInfo extends Component {
    render() {
        if (this.props.debug === true) {
            return (
                <div style={style.container}>
                    {this.props.children}
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