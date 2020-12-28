import React, { useEffect, useState } from 'react';

function CustomHookPage(props) {
	return (
		<div>
			<h3>CustomHookPage</h3>
			<p>{useClock().toLocaleTimeString()}</p>
		</div>
	);
}

export default CustomHookPage;

// 自定义 Hook，命名以 use 开头
// 只能在函数最外层调⽤ Hook (不能在 if for function 中 调用)
// 只能在 React 的函数组件中调⽤ Hook
function useClock() {
	const [date, setdate] = useState(new Date());
	useEffect(() => {
		const timer = setInterval(() => {
			setdate(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, []);
	return date;
}
