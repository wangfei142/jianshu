import React, { Component } from 'react';

import styles from './index.less';

import { connect } from 'dva';

import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Login extends Component {
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div className={styles._login_body}>
        <div className={styles._login_main}>
          <div className={styles._login_cut}>
            <a href="/login" className={styles._login_style}>
              登录
            </a>
            <i>·</i>
            <a href="/sign">注册</a>
          </div>

          <Form onSubmit={this.handleSubmit} className={styles.login_form}>
            <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="账户"
                />,
              )}
            </Form.Item>
            <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: false,
              })(
                <div className={styles._login_Checkbox}>
                  <Checkbox>记住密码</Checkbox>
                </div>,
              )}
              <a className={styles._login_form_forgot} href="">
                登录遇到问题？
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className={styles._login_form_button}
                disabled={hasErrors(getFieldsError())}
              >
                登录
              </Button>
              <div className={styles._login_bottom}>—————— 社交帐号登录 ——————</div>
              <ul>
                <li className={styles._logig_icon}>
                  <span className={styles._login_weibo}>
                    <Icon type="weibo-circle" />
                  </span>
                  <span className={styles._login_wechat}>
                    <Icon type="wechat" />
                  </span>
                  <span className={styles._login_qq}>
                    <Icon type="qq" />
                  </span>
                </li>
              </ul>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('获取的页面上的数据: ', values);
        //校验是否注册成功 成功跳转 失败不跳转
        this.props.header_title(values);

        let _this = this;

        setTimeout(() => {
          console.log(_this.props.listdata.code,"登录失败没数据网络连接失败");
          if (_this.props.listdata.code === 0) {
            message.success('登录成功');
            _this.props.history.push('/');
          } else {
            message.error('账号或密码错误');
          }
        }, 1000);
      }
    });
  };
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);



const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(Login);

export default connect(
  // null,
  // //向仓库拿数据
  (state, action) => {
    return {
      //从仓库中取出axios 返回的数据
      listdata: state.user.loginMethod,
    };
  },
  //向仓库传方法
  {
    header_title: name => ({ type: 'user/loginOperation', name }),
  },
)(WrappedHorizontalLoginForm);

