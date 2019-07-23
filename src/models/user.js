// user 的 model
// export default {
//   namespace: 'user',

//   state: {
//     // data: [
//     //   {
//     //     id: '1',
//     //     phone: 'John Brown',  //
//     //     nickname: "大傻子",
//     //     member: "1",
//     //   },
//     //   {
//     //     id: '2',
//     //     phone: 'John Brown',
//     //     nickname: "大傻子",
//     //     member: "1"
//     //   },
//     //   {
//     //     id: '3',
//     //     phone: 'John Brown',
//     //     nickname: "大傻子",
//     //     member: "1"
//     //   },
//     //   {
//     //     id: '4',
//     //     phone: 'John Brown',
//     //     nickname: "大傻子",
//     //     member: "1"
//     //   },
//     // ]
//   },



//   reducers: {

//   }
// }

import axios from 'axios'
export default {
  namespace: 'user',

  state: {
    data: []
  },
  // 异步
  effects: {
    *getUser(action, { put }) {
      let response = yield axios.post('http://localhost:8080/api/user/getuser');
      let res = yield response.data;
      yield put({ type: 'setUser', data: res.data.list });
    },
    *delUser(action, { put }) {
      let response = yield axios.delete(`http://10.36.140.11:8080/api/user/del/${action.id}`);
      let res = yield response.data;
      yield put({ type: 'getUser' });
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
    // setUserName(state, action) {
    //   return { ...state, ...{ userName: action.name } };
    // },
  },
};
