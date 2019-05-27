import React from 'react';
import Canvas from './components/Canvas';
import MidiListener from './components/MidiListener'

function App() {
    return (
        <div style={{...styles}} className="App">
            <MidiListener>
                <Canvas></Canvas>
            </MidiListener>
        </div>
    );
}


const styles = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

export default App;
