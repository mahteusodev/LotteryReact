import React, { Component } from 'react';
import LotteryBall from './LotteryBall';
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        maxNum: 40,
        maxBalls: 6,
        title: 'Lottery!'
    }

    constructor(props) {
        super(props);

        this.state = {
            nums: Array.from({length: this.props.maxBalls})
        };

        this.handleClick = this.handleClick.bind(this);
    }
     
generate(){
    this.setState(prevState => ({
       nums: prevState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
    }))
}

handleClick() {
    this.generate();
}

render() {

    return (
        <div className='Lottery'>
            <h1>{this.props.title}</h1>
            {this.state.nums.map(n => <LotteryBall num={n}/>)}
            <button onClick={this.handleClick}>Generate!</button>
        </div>
    );
}
}

export default Lottery;