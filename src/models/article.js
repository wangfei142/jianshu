import axios from 'axios'
import router from 'umi/router'

// 文章 的 model
export default {
  namespace: 'article',

  state: {
    activeList: [
      {
        id: '1',
        author: 'John Brown',//作者
        posted_time: "2018-12-25 12:05:09",// 发表时间
        title: 'New York No.k',// 文章标题
        hot: '1235',  // 热度
        discuss: '223', //  评论次数
        like: '22', // 喜欢
        data:
          '现在很多外媒都争相报道英国王室，然而很多时候看到的只是王室的表面新闻，其实有很多的内幕都是人们所不熟知的。就比如说在年末梅根置装费问题闹的沸',  // 内容
        comment: [{
          id: '1',
          username: 'John Brown', //评论者
          retime: "2018-12-25 12:05:09", //评论时间
          content: 'New York No. 1 Lake Park', //评论内容
        }, {
          id: '2',
          username: 'John Brown', //评论者
          retime: "2018-12-25 12:05:09", //评论时间
          content: 'New York No Park', //评论内容
        }]
      },
    ]
  },


  effects: {  //暂且封印 用于文章发布后重新get仓库
    *getActiveList(action, { put, select }) {
      let response = yield axios.get('http://10.36.140.11:8080/api/article')
      let res = response.data.data
      yield put({ type: 'setActiveList', list: res })
      router.push('/');
    }
  },


  reducers: {
    setActiveList(state, action) {
      return Object.assign({}, state, {
        activeList: action.list
      })
    }
  }
}
