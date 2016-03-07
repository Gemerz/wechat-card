import React, { PropTypes } from 'react';
import LinkedStateMixin from 'react/lib/LinkedStateMixin';
import { connect } from 'react-redux';
import PureComponent from './../PureComponent';
import { bindingMixin } from 'redux-2way-binding';
import { Form, Select,Input, InputNumber, DatePicker, TimePicker, Switch, Radio,
	Slider, Button, Row, Col, Upload, Icon } from 'antd';


@bindingMixin
export default class Forms extends PureComponent {
	constructor(props) {
		super(props);
		this.setBinding('wizforms');
	}


	static propTypes = {};


	render() {
		const {wizforms} = this.props;

		const FormItem = Form.Item;
		const Option = Select.Option;
		const RadioGroup = Radio.Group;
		const RangePicker = DatePicker.RangePicker;
		const Dragger = Upload.Dragger;
		const DraggerProps = {
			name: 'file',
			showUploadList: false,
			action: '/upload.do'
		}


		return (

			<div>
				<Form horizontal onSubmit={this.handleSubmit}>
					<FormItem
						id="wcc-user"
						label="商户："
						labelCol={{ span: 4 }}
						wrapperCol={{ span: 14 }}>
						<Input id="wcc-user" placeholder="商戶名稱; 如:珠海唯創"/>
					</FormItem>

					<FormItem
						id="wcc-color"
						label="卡券颜色："
						labelCol={{ span: 4 }}
						wrapperCol={{ span: 14 }}>
						<Select id="wcc-color" size="large" defaultValue="#dddddd" style={{ width: 200 }}>
							<Option value="jack">#dddddd</Option>
							<Option value="#dddddd">#dddddd</Option>
							<Option value="disabled" disabled>#dddddd</Option>
							<Option value="yiminghe">#dddddd</Option>
						</Select>
					</FormItem>

					<FormItem
						id="wcc-title"
						label="优惠券标题："
						labelCol={{ span: 4 }}
						wrapperCol={{ span: 14 }}>
						<Input id="wcc-title" placeholder=" "/>
					</FormItem>

					<FormItem
						id="wcc-title"
						label="副标题："
						labelCol={{ span: 4 }}
						wrapperCol={{ span: 14 }}>
						<Input id="wcc-title" placeholder=" "/>
					</FormItem>

					<FormItem
						className="wcc-vaildPeriod"
						label="有效期："
						labelCol={{ span: 4 }}
						wrapperCol={{ span: 18 }}>
						<RadioGroup >
							<Radio className="wcc-vaildPeriod-radio" value="a"> 固定日期: <RangePicker format="yyyy/MM/dd"/></Radio>
							<Radio className="wcc-vaildPeriod-radio" value="b">B</Radio>

						</RadioGroup>
					</FormItem>
					<hr/>
					<br/>
					<FormItem
						id="control-textarea"
						label="简介："
						labelCol={{ span: 4 }}
						wrapperCol={{ span: 14 }}>
						<Input type="textarea" id="control-textarea" rows="3"/>
					</FormItem>

					<FormItem
						label="封面图片："
						labelCol={{ span: 4 }}
						wrapperCol={{ span: 14 }}
						help="图片建议尺寸：850像素*350像素，大小不超过2M。上传">
						<Upload name="logo" action="/upload.do" listType="picture">
							<Button type="ghost">
								<Icon type="upload"/> 点击上传
							</Button>
						</Upload>
					</FormItem>

					<FormItem
						id="control-textarea"
						label="使用须知："
						labelCol={{ span: 4 }}
						wrapperCol={{ span: 14 }}>
						<Input type="textarea" id="control-textarea" rows="3"/>
					</FormItem>

					<FormItem
						label="图文介绍："
						labelCol={{ span: 4 }}
						wrapperCol={{ span: 14 }}
						help="图片建议尺寸：850像素*350像素，大小不超过2M。上传">
						<div style={{ marginTop: 16, height: 180 }}>
							<Dragger {...DraggerProps}>
								<p className="ant-upload-drag-icon">
									<Icon type="inbox"/>
								</p>
								<p className="ant-upload-text">点击或将文件拖拽到此区域上传</p>
								<p className="ant-upload-hint">支持单个或批量上传，严禁上传公司内部资料及其他违禁文件</p>
							</Dragger>
						</div>
					</FormItem>


					<Row style={{ marginTop: 24 }}>
						<Col span="16" offset="8">
							<Button type="primary" htmlType="submit">确定</Button>
						</Col>
					</Row>
					<div>


					</div>
				</Form>
			</div>
		);
	}
}
//
//
const mapStateToProps = state => ({...state.wizforms});

export default connect(mapStateToProps)(Forms);
