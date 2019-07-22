// 文章 的 model
export default {
  namespace: 'article',

  state: {
    data: [
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
      {
        id: '2',
        author: 'John Brown',
        posted_time: "2018-12-25 12:05:09",
        title: 'New York No. 2 Lake Park',
        hot: '13300',  // 热度
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
          content: 'New York No. 2 Lake Park', //评论内容
        }]
      },
      {
        id: '3',
        author: 'John Brown',
        posted_time: "2018-12-25 12:05:09",
        title: 'New York No. 1 Lake Park',
        hot: '13314',  // 热度
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
          content: 'New York No. 1 Lake Park', //评论内容
        }]
      },
    ]
  },



  reducers: {

  }
}
