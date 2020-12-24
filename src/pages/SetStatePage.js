import React, { Component } from 'react';

class SetStatePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};
	}
	componentDidMount() {
		// this.changeValue(1);
		document.getElementById('test').addEventListener('click', this.setCounter);
	}
	changeValue = (v) => {
		// setState 在合成事件和生命周期中是异步的  异步 => 批量更新 （优化性能）
		// this.setState({
		// 	counter: this.state.counter + v,
		// });
		// console.log(this.state.counter);

		// this.setState(
		// 	{
		// 		counter: this.state.counter + v,
		// 	},
		// 	() => {
		// 		// callback 在 state 更新完成后执行
		// 		console.log(this.state.counter);
		// 	}
		// );

		// 链式更新state
		this.setState((state) => {
			return {
				counter: state.counter + v,
			};
		});
	};
	setCounter = () => {
		// this.changeValue(1);
		// setTimeout(() => {
		// 	// setState 在 setTimeout 和 原生事件 中是 同步更新
		// 	this.changeValue(1);
		// }, 0);
		this.changeValue(1);
		this.changeValue(2);
	};
	render() {
		return (
			<div>
				<h3>SetStatePage</h3>
				<button onClick={this.setCounter}>{this.state.counter}</button>
				<button id="test"> 原生事件 </button>
			</div>
		);
	}
}

export default SetStatePage;
