import React from 'react';
import PureComponent from '../components/PureComponent';
import WeChatCard from '../components/wechatCard/WeChatCard';
import Td from '../components/todo/TD';

export default class Layout extends PureComponent {

	static propTypes = {};


	render() {

		return (
			<div className="WeChatCard-container">
				<Td />
				<WeChatCard />


			</div>
		)
	}
}
