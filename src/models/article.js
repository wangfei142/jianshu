// 文章 的 model
import axios from 'axios'
export default {
  namespace: 'article',

  state: {
    tableDataId: '',
    activeList: [],  // 文章列表
    commentList: [],  // 评论列表
  },

  effects: {
    //获取详情文章
    *getActionInfo(action, { put, select }) {
      let data = yield select(state => state.article.activeList)
      return data.filter(item =>
        item._id === action.id
      )
    },
    //获取评论
    *getComment(action, { put }) {
      let response = yield axios.get('http://10.36.140.11:8080/api/comment');
      let res = yield response.data;
      yield put({ type: 'setComment', commentList: res.data.list });
      yield put({ type: 'setCompilationsList', commentList: res.data.list })
    },
    //删除评论
    *delComment(action, { put }) {
      let response = yield axios.delete(`http://10.36.140.11:8080/api/comment/${action.id}`);
      let res = yield response.data;
      yield put({ type: 'getComment' });
    },
    //获取文章
    *getArticle(action, { put }) {
      let response = yield axios.get('http://10.36.140.11:8080/api/article');
      let res = yield response.data;
      yield put({ type: 'setArticle', activeList: res.data.list });
      yield put({ type: 'getComment' });
    },
    //删除文章
    *delArticle(action, { put }) {
      let response = yield axios.delete(`http://10.36.140.11:8080/api/article/${action.id}`);
      let res = yield response.data;
      yield put({ type: 'getArticle' });
    },
    //删除评论
    *delomment(action, { put }) {
      let response = yield axios.delete(`http://10.36.140.11:8080/api/comment/${action.id}`);
      let res = yield response.data;
      yield put({ type: 'getArticle' });
    },


  },

  reducers: {
    // 设置文章列表
    setArticle(state, action) {
      return {
        ...state,
        ...{
          activeList: action.activeList,
        },
      };
    },
    // 设置评论列表
    setComment(state, action) {
      return {
        ...state,
        ...{
          commentList: action.commentList,
        },
      };
    },
    // 设置评论列表
    setCompilationsList(state, action) {
      let commentList = [...state.commentList];
      let activeList = [...state.activeList];
      let newList = [];
      commentList.forEach(comm => {
        let title = comm.title;
        let index = newList.findIndex(item => item.title === title);
        if (index > -1) {
          newList[index].comment.push(comm);
        } else {
          let obj = {
            title,
            comment: [comm]
          };
          newList.push(obj);
        }
      });

      activeList.map(val => {
        newList.map(val2 => {
          if (val.title === val2.title) {
            return Object.assign(val, val2);
          }
        })
      });

      return {
        ...state,
        ...{
          activeList: activeList,
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
      }
    }
  }
}
