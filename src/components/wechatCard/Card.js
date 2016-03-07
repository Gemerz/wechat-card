import React  from 'react';
import PureComponent from './../PureComponent';
import { Form, Input, Select, Checkbox, Radio } from 'antd';


export default class Card extends PureComponent {

	render() {
		const FormItem = Form.Item;
		const Option = Select.Option;
		const RadioGroup = Radio.Group;

		return (
			<div id='wechatCard'>
				<div className='wechat-card'>
					<div id='wechat-card-preview'>
						<div className='wechat_card_body'>
							<div className='wechat_card_section shop'>
								<div className='shop_panel'>
									<div className='logo_area'>
										<span className='logo'>
											<img id='js_logo_url_preview'
													 src='https://mmbiz.qlogo.cn/mmbiz/ibj29pydJbnKmfKULMk87GGxgrqriapevWmIibBwmRTaxR0PGqY37ggephG9UiaotiaxkcwuWb9TfiaXibLQPEafTOZzg/0?wx_fmt=jpeg'/>
										</span>
										<p className='brandname'></p>
										<p className='title'></p>
										<p></p>

										<div className='wechat_tick_msg'>
											<span className='wechat-btn btn_use_card' id='wechat_color_preview'>使用</span>
										</div>

									</div>
								</div>

							</div>
							<div className='wechat_card_cell msg_img_text'>
								<ul className='list'>
									<li className='wechat_card_section'>
										<div className='li_panel'>
											<div className='li_content'>
												<p>折扣券详情</p>
												<div className='section_card_intro'>
													<p id='js_abstract_preview'></p>
													<div className='cover_wrap' id='js_cover_preview'>

													</div>
												</div>
											</div>
											<span className='ic ic_go'></span>
										</div>
									</li>
								</ul>
							</div>
							<div className='wechat_card_cell msg_img_text'>
								<ul className='list'>
									<li className='wechat_card_section'>
										<div className='li_panel'>
											<div className='li_content'>
												<p>适用门店</p>
												<div className='section_card_intro'>
													<p id='js_abstract_preview'></p>
													<div className='cover_wrap' id='js_cover_preview'>

													</div>
												</div>
											</div>
											<span className='ic ic_go'></span>
										</div>
									</li>
									<li className='wechat_card_section'>
										<div className='li_panel'>
											<div className='li_content'>
												<p>公众号</p>
												<div className='section_card_intro'>
													<p id='js_abstract_preview'></p>
													<div className='cover_wrap' id='js_cover_preview'>

													</div>
												</div>
											</div>
											<span className='ic ic_go'></span>
										</div>
									</li>
								</ul>
							</div>

							<div className='wechat_card_cell custom_detail'>
								<ul className='list'>
									<li className='wechat_card_section'>
										<div className='li_panel'>
											<div className='li_content'>
												<p>自定义入口(选填)</p>
												<div className='section_card_intro'>
													<p id='js_abstract_preview'></p>
													<div className='cover_wrap' id='js_cover_preview'>

													</div>
												</div>
											</div>
											<span className='ic ic_go'></span>
										</div>
									</li>

								</ul>
							</div>

						</div>

					</div>

				</div>

			</div>
		);
	}
}


