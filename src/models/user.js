import axios from 'axios'
export default {
  namespace: 'user',

  state: {
    //注册时返回过来的 code 数值  0 成功 -1 失败
    registration: {},
    //登录时返回过来的 code 数值  0 成功 -1 失败
    loginMethod: {},
    data: []
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
      let response = yield axios.post(`http://10.36.140.11:8080/api/user/amend`, action.data);
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
      }
      let response = yield axios.post('http://10.36.140.11:8080/api/user/register',
        JSON.stringify(data)
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
      }
      let response = yield axios.post('http://10.36.140.11:8080/api/user/login',
        JSON.stringify(data)
      );
      let res = yield response.data;
      console.log(res.data);

      var list = JSON.stringify(res.data);
      window.localStorage.setItem('loginMethod', list);
      yield put({ type: 'loginMethod', data: res });
    }

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

