import axios from 'axios';
import { Upload } from 'antd';
export default {
  namespace: 'user',

  state: {
    //注册时返回过来的 code 数值  0 成功 -1 失败
    registration: {},
    //登录时返回过来的 code 数值  0 成功 -1 失败
    loginMethod: {},
    //所有用户
    data: [],
  },
  // 异步
  effects: {
    // 获取用户
    *getUser(action, { put }) {
      let response = yield axios.post('http://10.36.140.11:8080/api/user/getuser');
      let res = yield response.data;
      yield put({ type: 'setUser', data: res.data.list });
    },
    //删除用户
    *delUser(action, { put }) {
      let response = yield axios.delete(`http://10.36.140.11:8080/api/user/del/${action.id}`);
      let res = yield response.data;
      yield put({ type: 'getUser' });
    },
    // 修改用户信息
    *updateUser(action, { put }) {
      console.log(action.data);
      let response = yield axios.post(`http://10.36.140.11:8080/api/user/amendvip`, action.data);
      let res = yield response.data;
      console.log(res);
      yield put({ type: 'getUser' });
    },

    *RegisterOperation(action, { put }) {
      // 为给定 ID 的 user 创建请求
      console.log(1);
      let data = {
        nickname: action.values.author,
        phone: action.values.phone,
        password: action.values.password,
      };
      let response = yield axios.post(
        'http://10.36.140.11:8080/api/user/register',
        JSON.stringify(data),
      );
      let res = yield response.data;

      console.log(res);
      yield put({ type: 'RegisterOperationlist', data: res.code });
    },
    //登录函数
    *loginOperation(action, { put }) {
      let data = {
        phone: action.name.username,
        password: action.name.password,
      };
      let response = yield axios.post(
        'http://10.36.140.11:8080/api/user/login',
        JSON.stringify(data),
      );
      let res = yield response.data;
      console.log(res.data);

      var list = JSON.stringify(res.data);
      window.localStorage.setItem('loginMethod', list);
      yield put({ type: 'loginMethod', data: res });
    },

    //修改用户的信息的数据
    *information(action, { put }) {
      // console.log(action.values.upload);
      // console.log(action.values);
      let loginMethod = JSON.parse(window.localStorage.getItem('loginMethod'));
      // console.log(loginMethod._id);
      //只修改昵称

      if (!action.values.upload || action.values.upload.length == 0) {
        //有名字 没头像的发送
        // console.log('没头像');
        if (action.values.username) {
          // console.log('有名字');
          let userInfo = {
            nickname: action.values.username,
          };
          let obj = {
            id: loginMethod._id,
            userInfo,
          };
          let response = yield axios.post(
            `http://10.36.140.11:8080/api/user/amend`,
            JSON.stringify(obj),
          );
          let res = yield response.data;
          let list = JSON.stringify(
            Object.assign({}, loginMethod, {
              nickname: res.data.nickname,
            }),
          );
          window.localStorage.setItem('loginMethod', list);
          window.location.reload();
        }
      } else {
        if (!action.values.username) {
          //没名字 有头像的发送
          // console.log('没名字');
          let loginMethod = JSON.parse(window.localStorage.getItem('loginMethod'));
          // new formData():将form表单元素的name与value进行组合，实现表单数据的序列化，从而减少表单元素的拼接，提高工作效率。
          let formData = new FormData();
          // //追加数据
          formData.append('id', loginMethod._id);
          // //获取 document ，  action.values.upload[0]， 文件上传的路径并追加起来
          //发送的数据 action.values.upload[0].originFileObj
          formData.append('avatar', action.values.upload[0].originFileObj);
          let response = yield axios.post(
            `http://10.36.140.11:8080/api/user/updateavatar`,
            formData,
          );
          let res = yield response.data;

          let list = JSON.stringify(
            Object.assign({}, loginMethod, {
              avatar: res.data,
            }),
          );
          window.localStorage.setItem('loginMethod', list);
          window.location.reload();
        } else {
          // console.log('有头像');
          // console.log('有名字');
          let loginMethod = JSON.parse(window.localStorage.getItem('loginMethod'));
          let formData = new FormData();
          formData.append('id', loginMethod._id);
          formData.append('avatar', action.values.upload[0].originFileObj);
          let portrait = yield axios.post(
            `http://10.36.140.11:8080/api/user/updateavatar`,
            formData,
          );
          // 头像
          let por = yield portrait.data.data;

          let userInfo = {
            nickname: action.values.username,
          };
          let obj = {
            id: loginMethod._id,
            userInfo,
          };
          let response = yield axios.post(
            `http://10.36.140.11:8080/api/user/amend`,
            JSON.stringify(obj),
          );
          let res = yield response.data;

          let list = JSON.stringify(
            Object.assign({}, loginMethod, {
              nickname: res.data.nickname,
              avatar: por,
            }),
          );

          window.localStorage.setItem('loginMethod', list);
          window.location.reload();
        }
      }
      // console.log('仓库的数据', action.values);
      // console.log('仓库的数据', action.values.upload[0]);
    },
  },

  reducers: {
    setUser(state, action) {
      return {
        ...state,
        ...{
          data: action.data,
        },
      };
    },

    //注册时返回过来的 code 数值  0 成功 -1 失败
    RegisterOperationlist(state, action) {
      return Object.assign({}, state, {
        registration: action.data,
      });
    },
    loginMethod(state, action) {
      // console.log(action.data, "我是登录的界面来的数据");
      return Object.assign({}, state, {
        loginMethod: action.data,
      });
    },
  },
};
