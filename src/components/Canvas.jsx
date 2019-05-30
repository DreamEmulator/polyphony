import React, {Component} from 'react';

class Canvas extends Component {

    componentDidMount() {
        this.drawLissajous(this.props.octave, this.props.note);
    }

    drawLissajous = (i, n) => {
        let canvas = document.getElementById('drawingCanvas');
        if (!canvas || !canvas.getContext) {
            return false;
        }
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.strokeStyle = this.props.color;
        let Base = {x: canvas.width/2, y: canvas.height/2};
        ctx.moveTo(Base.x, Base.y);
        let radius = window.innerWidth > window.innerHeight ? window.innerWidth/4 : window.innerHeight/4;

        let step = 1;
        for (let j = 0; j <= 2 * Math.PI; j += Math.PI / n / i) {
            setTimeout(()=>{
                let x = radius * Math.sin(i * j);
                let y = radius * Math.sin((i + 1) * j);
                ctx.lineTo((Base.x + x)+0.5, (Base.y - y)+0.5);
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