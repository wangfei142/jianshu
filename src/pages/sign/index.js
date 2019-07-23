import React, { Component } from 'react';
import styles from './index.less';
// import { Router, Route, Link } from 'react-router';
import { connect } from 'dva';

import { Form, Icon, Input, Button, message } from 'antd';

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
            <a href="/login">登录</a>
            <i>·</i>
            <a href="/sign" className={styles._login_style}>
              注册
            </a>
          </div>
          <Form onSubmit={this.handleSubmit} className={styles.login_form}>
            {/* 昵称 */}
            <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
              {getFieldDecorator('author', {
                rules: [
                  { required: true, message: '请输入昵称!' },
                  // { pattern: [\u4e00-\u9fa5], message: '请输入昵称!' }
                ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="昵称"
                />,
              )}
            </Form.Item>
            {/* 手机号 */}
            <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: '请输入手机号!' }],
              })(
                <Input
                  prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="手机号"
                />,
              )}
            </Form.Item>
            {/* 密码 */}
            <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />,
              )}
            </Form.Item>

            <Form.Item>
              {/* //安全协议 */}
              <span className={styles._login_form_forgot}>
                <span>
                  点击 “注册” 即表示您同意并愿意遵守简书 <br /> <a href="#">用户协议</a> 和
                  <a href="#">隐私政策</a> 。
                </span>
              </span>
              {/* 提交按钮 */}
              <Button
                type="primary"
                htmlType="submit"
                className={styles._login_form_button}
                disabled={hasErrors(getFieldsError())}
              >
                登录
              </Button>
              {/* 社交账号注册 */}
              <div className={styles._login_bottom}>———— 社交帐号直接注册 ————</div>
              <ul>
                <li className={styles._logig_icon}>
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
    // 在开始时禁用提交按钮.
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
          console.log(_this.props.listdata);
          if (_this.props.listdata === 0) {
            message.success('成功注册');
            _this.props.history.push('/login');
          } else {
            message.error('手机号重复');
          }
        }, 1000);
      }
    });
  };
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(Login);

export default connect(
  state => {
    return {
      //从仓库中取出axios 返回的数据
      listdata: state.user.registration,
    };
  },
  //向仓库传方法
  {
    header_title: values => ({ type: 'user/RegisterOperation', values }),
  },
)(WrappedHorizontalLoginForm);
