import axios from 'axios'

// user 的 model
export default {
  namespace: 'user',

  state: {
    data: [
      {
        id: '1',
        username: 'John Brown', //
        nickname: '大傻子',
        sex: '男',
        member: '1',
        phone: ""

      },
      {
        id: '2',
        username: 'John Brown',
        nickname: '大傻子',
        sex: '男',
        member: '1',
      },
      {
        id: '3',
        username: 'John Brown',
        nickname: '大傻子',
        sex: '男',
        member: '1',
      },
      {
        id: '4',
        username: 'John Brown',
        nickname: '大傻子',
        sex: '男',
        member: '1',
      },
    ],
    //注册时返回过来的 code 数值  0 成功 -1 失败
    registration: {},
    //登录时返回过来的 code 数值  0 成功 -1 失败
    loginMethod: {},
  },
  effects: {
    //注册函数
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


