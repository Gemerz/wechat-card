import React from 'react';
import PureComponent from '../components/PureComponent';
import WeChatCard from '../components/wechatCard/WeChatCard';
import TD from '../components/todo/TD';
export default class Layout extends PureComponent {


	render() {
		return (
			<div className="WeChatCard-container">
				<WeChatCard />


			</div>
		);
	}
}
