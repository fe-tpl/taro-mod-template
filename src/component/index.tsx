import "./index.less";

import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

export default class IndexComponent extends Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      // ...props.mockData, // 这里不要做任何修改，不允许删除
      ...window['${module-name}'],// 这里不要做任何修改，不允许删除
      age: 121
    }
  }
  myClick = () => {
    this.setState({ name: "哈哈哈哈哈哈" });
  }
  render() {
    return (
      <View>
        <View className="txt" onClick={() => this.myClick()}>
          这个 + "=" + {this.state.name}
        </View>
        <View className="txt">
          我的111
        </View>
      </View>
    )
  }
}