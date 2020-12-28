import React, { Component } from 'react';
import Layout from './Layout';

export default class HomePage extends Component {
	render() {
		return (
			<Layout showTopBar={false} showBottomBar={true} title="首页">
				{/* <div>
					<h3>Homepage</h3>
				</div> */}
				{{
					content: (
						<div>
							<h3>Homepage</h3>
						</div>
					),
					text: 'this. is text',
					btnClick: () => {
						console.log('btnClick');
					},
				}}
			</Layout>
		);
	}
}
