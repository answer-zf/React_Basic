import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import HomePage from './HomePage';
import UserPage from './UserPage';

export default class RouterPage extends Component {
	render() {
		return (
			<div>
				<h3>RouterPage</h3>
				<Router>
					<Link to="/"> HomePage </Link>
					<Link to="/user"> UserPage </Link>
					{/* exact 跟路由精确匹配 */}
					<Switch>
						<Route
							exact
							path="/"
							// 优先级最高
							// children={() => <div>children</div>}
							// 优先级其次
							// component={HomePage}
							render={() => <div>render</div>}
						/>
						<Route path="/user" component={UserPage} />
						<Route component={emptyPage} />
					</Switch>
				</Router>
			</div>
		);
	}
}

class emptyPage extends Component {
	render() {
		return (
			<div>
				<h3>emptyPage</h3>
			</div>
		);
	}
}
