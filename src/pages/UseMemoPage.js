import React, { useMemo, useState } from 'react';

function UseMemoPage(props) {
	const [count, setCount] = useState(0);

	// 当前的计算只与 count 有关
	// value 发生改变 该函数依旧运行
	const expensive = useMemo(() => {
		console.log('expensive');
		let sum = 0;
		for (let i = 0; i < count; i++) {
			sum += i;
		}
		return sum;
		// 只有count 改变才执行
	}, [count]);

	const [value, setValue] = useState('');
	return (
		<div>
			<h3>UseMemoPage</h3>
			<p>count: {count}</p>
			{/* <p>expensive{expensive()}</p> */}
			<p>expensive{expensive}</p>
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
		</div>
	);
}

export default UseMemoPage;
