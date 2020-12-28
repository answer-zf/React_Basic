import React, { Component, PureComponent, useCallback, useState } from 'react';

function UseCallbackPage(props) {
	const [count, setCount] = useState(0);

	const addClick = useCallback(() => {
		let sum = 0;
		for (let i = 0; i < count; i++) {
			sum += i;
		}
		return sum;
	}, [count]);

	const [value, setValue] = useState('');

	return (
		<div>
			<h3>UseCallbackPage</h3>
			<p>count: {count}</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				add
			</button>
			<input
				type="text"
				value={value}
				onChange={(event) => {
					setValue(event.target.value);
				}}
			/>
			<Child addClick={addClick} />
		</div>
	);
}

export default UseCallbackPage;

class Child extends PureComponent {
	render() {
		const { addClick } = this.props;
		console.log('child render');
		return (
			<div>
				<h3>Child</h3>
				<button
					onClick={() => {
						console.log(addClick());
					}}
				>
					add
				</button>
			</div>
		);
	}
}
