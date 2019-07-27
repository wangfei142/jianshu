import React, { Component } from 'react';
import styles from "./index.less"
import Navlink from 'umi/navlink';

//数据样式
const footer = [
  { id: 1, title: "关于简书", url: "http://www.jianshu.com/c/jppzD2", d: "·" },
  { id: 2, title: "联系我们", url: "http://www.jianshu.com/contact", d: "·" },
  { id: 3, title: "加入我们", url: "http://www.jianshu.com/c/bfeec2e13990", d: "·" },
  { id: 4, title: "简书出版", url: "http://www.jianshu.com/p/fc1c113e5b6b", d: "·" },
  { id: 5, title: "品牌与徽标", url: "http://www.jianshu.com/press", d: "·" },
  { id: 6, title: "帮助中心", url: "http://www.jianshu.com/faqs", d: "·" },
  { id: 7, title: "合作伙伴", url: "http://www.jianshu.com/p/cabc8fa39830", d: "" },
]
class FooterHome extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <div>
          <ul>
            <li className={styles._footer_a}>
              {
                footer.map(item => {
                  return (
                    <div key={item.id}>
                      <Navlink to={item.url} >{item.title} <em>&nbsp; {item.d} &nbsp; </em>
                      </Navlink>

                    </div>
                  )
                })
              }
            </li>
          </ul>
        </div>
        <div className={styles._footer_foot}>
          <p>
            ©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /
            Smrz <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252">
              沪公网安备31010402002252号/ Wxb
            </a>
            <br /> 简书网举报电话：021-34770013 /  Fanzha  亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产
            <br />
            被骗受损而设，请您一旦收到来电，立即接听 /  Zggsrz
        </p>
        </div>

      </div>
    );
  }
}

export default FooterHome;
