import React, { Component } from 'react';
import './CanvasComponent.css';

class CanvasComponent extends Component {

    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    render() {
        return (
            <canvas ref={this.props.id} id={this.props.id}></canvas>
        );
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('manchego');
        ctx.fillRect( 100, 100, 20, 20 );
    }
}

export default CanvasComponent;