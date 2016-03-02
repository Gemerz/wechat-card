import React, { PropTypes } from 'react';
import PureComponent from './../PureComponent';
import { Form, Select,Input, InputNumber, DatePicker, TimePicker, Switch, Radio,
	Slider, Button, Row, Col, Upload, Icon } from 'antd';


export default class Forms extends PureComponent {
	static propTypes = {
		form: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired,
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log('收到表单值：', this.props.form.getFieldsValue());
	}

	normFile(e) {
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	}


	render() {
		const FormItem = Form.Item;
		const Option = Select.Option;
		const RadioGroup = Radio.Group;
		const RangePicker = DatePicker.RangePicker;

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
					<Row style={{ marginTop: 24 }}>
						<Col span="16" offset="8">
							<Button type="primary" htmlType="submit">确定</Button>
						</Col>
					</Row>

				</Form>
			</div>
		);
	}
}


