import React, { useEffect, useState } from 'react';

function HookPage(props) {
	const [count, setCount] = useState(0);
	const [date, setDate] = useState(new Date());

	// componentDidMount componentDidUpdate
	useEffect(() => {
		console.log('count');
		// 在 count 发生改变时执行
		document.title = `点击${count}次`;
	}, [count]); // 依赖项，数组中的值发生改变才执行

	useEffect(() => {
		console.log('timer');
		// didMount 的时候执行一次
		const timer = setInterval(() => {
			setDate(new Date());
		}, 1000);

		// willUnmount 清除定时器
		return () => clearInterval(timer);
	}, []);

	return (
		<div>
			<h3>HookPage</h3>
			<p>{count}</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				add
			</button>

			<p>{date.toLocaleTimeString()} </p>
		</div>
	);
}

export default HookPage;
