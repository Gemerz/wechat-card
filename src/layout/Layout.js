import React from 'react';
import PureComponent from '../components/PureComponent';
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
