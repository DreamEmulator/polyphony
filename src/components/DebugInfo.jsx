import React, {Component} from 'react';

class DebugInfo extends Component {
    render() {
        if (this.props.debug === true){
            return (
                <div>
                    {this.props.children}
                </div>
            );
        } else {
            return null;
        }
    }
}

export default DebugInfo;