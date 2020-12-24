import React, { useEffect, useState } from 'react';

function FunctionComponent(props) {
	const [date, setDate] = useState(new Date());
	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, []);
	return (
		<div>
			<h3>FunctionComponent</h3>
			<p>{date.toLocaleTimeString()}</p>
		</div>
	);
}

export default FunctionComponent;
