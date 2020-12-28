// import React, { Component } from 'react';
import React, { PureComponent } from 'react';

// export default class PureComponentPage extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			count: 0,
// 		};
// 	}
// 	// 性能优化
// 	shouldComponentUpdate(nextProps, nextState) {
// 		return nextState.count !== this.state.count;
// 	}
// 	setCount = () => {
// 		this.setState({
// 			count: 100,
// 		});
// 	};
// 	render() {
// 		console.log('render');
// 		const { count } = this.state;
// 		return (
// 			<div>
// 				<h3>PureComponentPage</h3>
// 				<button onClick={this.setCount}>{count}</button>
// 			</div>
// 		);
// 	}
// }

export default class PureComponentPage extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			// obj: { num: 0 }, 验证浅比较
		};
	}
	setCount = () => {
		this.setState({
			count: 100,
			// obj: { num: 1000 },
		});
	};
	render() {
		console.log('render');
		const { count } = this.state;
		return (
			<div>
				<h3>PureComponentPage</h3>
				<button onClick={this.setCount}>{count}</button>
			</div>
		);
	}
}
