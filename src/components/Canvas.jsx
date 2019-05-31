import React, {Component} from 'react';
import RandomColor from "randomcolor";

class Canvas extends Component {

    color = note => {
        return RandomColor({seed: note, luminosity: "light"});
    }

    size = octave => `scale(${octave / 2})`;

    drawLissajous = (i, n) => {
        let canvas = document.getElementById('drawingCanvas');
        if (!canvas || !canvas.getContext) {
            return false;
        }
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.strokeStyle = this.color();
        let Base = {x: canvas.width/2, y: canvas.height/2};
        ctx.moveTo(Base.x, Base.y);
        let radius = window.innerWidth > window.innerHeight ? window.innerWidth/4 : window.innerHeight/4;

        let step = 1;
        for (let j = 0; j <= 2 * Math.PI; j += Math.PI / n / i) {
            setTimeout(()=>{
                let x = radius * Math.sin(i * j);
                let y = radius * Math.sin((i + 1) * j);
                ctx.lineTo((Base.x + x), (Base.y - y));
                ctx.stroke();
            },(10*step));
            step++;
        }
    };

    render() {return (
            <canvas id="drawingCanvas" width={window.innerWidth} height={window.innerHeight}/>
        );
    }
}

export default Canvas;