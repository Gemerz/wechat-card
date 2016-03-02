import React  from 'react';
import PureComponent from './../PureComponent';
import { Form, Input, Select, Checkbox, Radio } from 'antd';
import Forms from './Forms';
import Card from './Card';


export default class WeChatCard extends PureComponent {

	render() {

		return (
			<div>
				<div className="col-8">
					<Card />

				</div>

				<div className="col-16 wechatcard-form">
					<Forms />
				</div>
			</div>
		);
	}
}


