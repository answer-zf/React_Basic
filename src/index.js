import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// import store from './store';
// import { Provider } from 'react-redux';

ReactDOM.render(
	// react redux
	// <Provider store={store}>
	// 	<App />
	// </Provider>,
	<App />,
	document.getElementById('root')
);
// reportWebVitals();

// store.subscribe(() => { // 刷新页面
// 	ReactDOM.render(<App />, document.getElementById('root'));
// });
