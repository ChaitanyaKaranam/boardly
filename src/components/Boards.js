import React, { Component } from 'react';
import Button from './styled/button';
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
                    <Button className={this.renderActiveClass('bar')} name="BAR CHART" onClick={() => {
                        this.setState({ active: 'bar'})
                    }}/>
                    <Button className={this.renderActiveClass('line')} name="LINE CHART" onClick={() => {
                        this.setState( { active: 'line'})
                    }}/>
                    <Button className={this.renderActiveClass('others')} name="OTHERS" onClick={() => {
                        this.setState({ active: 'others'})
                    }}/>
                </div>
                <div className="board__images">
                    <img src={this.renderImage()} alt="chart"/>
                </div>
            </div>
        );
    }
}

export default Boards;