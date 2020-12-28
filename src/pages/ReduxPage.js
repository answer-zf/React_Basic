import React, { Component } from 'react';

import store from '../store';

// createStore 创建 store
// reducer 初始化、修改状态函数
// getState() 获取 状态值
// dispatch 提交更新
// subscribe 视图同步更新

export default class ReduxPage extends Component {
	componentDidMount() {
		store.subscribe(() => {
			console.log('is change');
			// 页面强制刷新
			// this.forceUpdate();
		});
	}
	render() {
		console.log(store);
		return (
			<div>
				<h3>ReduxPage</h3>
				<p>{store.getState()}</p>
				<button onClick={() => store.dispatch({ type: 'ADD' })}>ADD</button>
			</div>
		);
	}
}
