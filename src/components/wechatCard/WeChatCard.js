import React, { PropTypes } from 'react';
import PureComponent from './../PureComponent';
import { connect } from 'react-redux';
import Forms from './Forms';
import Card from './Card';


class WeChatCard extends PureComponent {

	static propTypes = {
		//wizforms: PropTypes.object.isRequired
	};

	render() {
		const { wizforms } =this.props;

		return (
			<div>
				<div className="col-8">
					<Card />

				</div>

				<div className="col-16 wechatcard-form ">
					<Forms/>
				</div>
			</div>
		);
	}
}


const mapStateToProps = state => ({...state.wizforms});

export default connect(mapStateToProps)(WeChatCard);

