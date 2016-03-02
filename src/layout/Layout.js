import React from 'react';
import PureComponent from '../components/PureComponent';
import TD from '../components/todo/TD';
import WeChatCard from '../components/wechatCard/WeChatCard';

class Layout extends PureComponent {

	render() {
		return (
			<div className="WeChatCard-container">

				<WeChatCard />
			</div>
		);
	}
}
export default Layout;
