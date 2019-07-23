// 文章 的 model
import axios from 'axios'
export default {
  namespace: 'article',

  state: {
    tableDataId: '',
    activeList: []
  },


  effects: {
    *getArticle(action, { put }) {
      let response = yield axios.get('http://10.36.140.11:8080/api/article');
      let res = yield response.data;
      yield put({ type: 'setArticle', activeList: res.data.list });
    },
    *delArticle(action, { put }) {
      let response = yield axios.delete(`http://10.36.140.11:8080/api/article/${action.id}`);
      let res = yield response.data;
      yield put({ type: 'getArticle' });
    },
  },

  reducers: {
    setArticle(state, action) {
      return {
        ...state,
        ...{
          activeList: action.activeList,
        },
      };
      
    },
tableDataOperation(state, action) {
      console.log(action.tableDataId);
      return {
        ...state,
        ...{
          tableDataId: action.tableDataId
        },
      };
    },
}



