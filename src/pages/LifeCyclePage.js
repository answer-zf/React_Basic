import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class LifeCyclePage extends Component {
	// static defaultProps = {
	// 	msg: 'zf',
	// };
	// static propTypes = {
	// 	// msg: PropTypes.string,
	// 	msg: PropTypes.string.isRequired, // 必须传 msg,不传报错
	// };
	constructor(props) {
		super(props);
		this.state = { count: 0 };
		console.log('constructor');
	}
	static getDerivedStateFromProps(props, state) {
		console.log('getDerivedStateFromProps');
		const { count } = state;
		return count > 5 ? { count: 0 } : null;
	}
	// // 17废除，暂时可用
	// UNSAFE_componentWillMount() {
	// 	console.log('componentWillMount');
	// }
	componentDidMount() {
		console.log('componentDidMount');
	}
	shouldComponentUpdate(nextProps, nextState) {
		const { count } = nextState;
		console.log('shouldComponentUpdate', nextState, this.state);
		return count !== 3;
	}
	// // 17废除，暂时可用
	// UNSAFE_componentWillUpdate() {
	// 	console.log('componentWillUpdate');
	// }
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('getSnapshotBeforeUpdate', prevProps, prevState);
		return {
			msg: 'getSnapshotBeforeUpdate',
		};
	}
	componentDidUpdate(prevProps, prevState, snapShot) {
		console.log('componentDidUpdate', prevProps, prevState, snapShot);
	}
	setCount = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};
	render() {
		console.log('render', this.props);
		const { count } = this.state;
		return (
			<div>
				<h3>LifeCyclePage</h3>
				<p>{count}</p>
				<button onClick={this.setCount}>change</button>
				{/* {count % 2 && <Chlid count={count} />} */}
				<Chlid count={count} />
			</div>
		);
	}
}

class Chlid extends Component {
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
	// // 17废除，暂时可用
	// // 初次渲染时不会执行，只有在已挂载的组件接受新的 props 时，才执行
	// UNSAFE_componentWillReceiveProps(nestProps) {
	// 	console.log('componentWillReceiveProps', nestProps);
	// }
	render() {
		console.log('Child render');
		const { count } = this.props;
		return (
			<div>
				<h3>Child</h3>
				<p>{count}</p>
			</div>
		);
	}
}
