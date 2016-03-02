import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Layout from './layout/Layout';
import rootReducer from './reducers';
import 'styles/app.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/style/index.less';

const store = createStore(rootReducer);

render(
	<Provider store={store}>
		<Layout />
	</Provider>,
	document.getElementById('app')
);
