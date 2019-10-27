import React, { Component } from 'react';
import bar from '../images/barchart.png';
import line from '../images/linechart.png';
import others from '../images/otherschart.png';
import '../styles/Boards.scss'

class Boards extends Component {

    constructor(props) {
        super(props);
        this.state={
            active: 'bar'
        }
    }
    
    renderActiveClass(chart){
        return chart === this.state.active ? 'primary-button' : 'secondary-button'
    }

    renderImage(){
        if(this.state.active === 'bar'){
            return bar;
        }else if(this.state.active === 'line'){
            return line;
        }else{
            return others
        }
    }

    render() {
        return (
            <div className="board__wrapper">
                <div className="board__charts">
                    <button className={this.renderActiveClass('bar')} onClick={() => {
                        this.setState({ active: 'bar'})
                    }}>
                        BAR CHART
                    </button>
                    <button className={this.renderActiveClass('line')} onClick={() => {
                        this.setState( { active: 'line'})
                    }}>
                        LINE CHART
                    </button>
                    <button className={this.renderActiveClass('others')} onClick={() => {
                        this.setState({ active: 'others'})
                    }}>
                        OTHERS
                    </button>
                </div>
                <div className="board__images">
                    <img src={this.renderImage()} alt="chart"/>
                </div>
            </div>
        );
    }
}

export default Boards;