import React, { Component } from 'react';
// import from ''

import {
  Form,
  Select,
  InputNumber,
  Radio,
  Button,

} from 'antd';

const { Option } = Select;

class Demo extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    let loginMethod = JSON.parse(window.localStorage.getItem('loginMethod'));

    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="昵称">
          <span className="ant-form-text">&nbsp;{loginMethod.nickname}</span>
        </Form.Item>
       
        <Form.Item label="个性签名">
          {getFieldDecorator('select-multiple', {
            rules: [
              // { required: true, message: 'Please select your favourite colors!', type: 'array' },
            ],
          })(
            <Select mode="multiple" placeholder="世界这么大，出去看看，就能遇到爱！">
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="年龄">
          {getFieldDecorator('input-number', { initialValue: 18 })(<InputNumber min={1} max={100} />)}
          <span className="ant-form-text"> 岁</span>
        </Form.Item>

        <Form.Item label="会员等级">
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value="1">等级 1</Radio>
              <Radio value="2">等级 2</Radio>
              <Radio value="3">等级 3</Radio>
              <Radio value="4">等级 4</Radio>
              <Radio value="5">等级 5</Radio>
            </Radio.Group>,
          )}
        </Form.Item>
      

      
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
           保存
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedDemo = Form.create({ name: 'validate_other' })(Demo);

export default WrappedDemo;
// ReactDOM.render(<WrappedTimeRelatedForm />, );
