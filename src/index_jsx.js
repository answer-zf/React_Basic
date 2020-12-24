import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import styles from './index.module.css'; // .app .logo { width: 100px; }
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import logo from './logo192.png';

const name = 'this.is zf';

const obj = {
	foo: 'bar',
	foz: 'baz',
};

const formatName = (name) => {
	return name.foo + ',' + name.foz;
};

const greet = <div>zf</div>;

const show = true; // 条件示例

const a = [1, 2, 3]; // 循环示例

const jsx = (
	<div className={styles.app}>
		hello {name}
		<div>{formatName(obj)}</div>
		{greet}
		{show ? greet : 'login'}
		{show && greet}
		<ul>
			{a.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
		<img
			src={logo}
			alt="logo"
			// className="logo"
			className={styles.logo} // css模块化
			// style={{ width: '50px', height: '50px' }} 内联写法，使用对象表示
		/>
	</div>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
