import React, { PropTypes } from 'react';
import PureComponent from './../PureComponent';
import { connect } from 'react-redux';
import Forms from './Forms';
import Card from './Card';


class WeChatCard extends PureComponent {


	render() {

		return (
			<div>
				<div className="col-8">
					<Card />

				</div>

				<div className="col-16 wechatcard-form ">
					<Forms />
				</div>
			</div>
		);
	}
}


const mapStateToProps = state => ({...state.forms});

export default connect(mapStateToProps)(WeChatCard);

