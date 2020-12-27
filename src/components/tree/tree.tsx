import React from 'react';

import {Props, State, KeyNodeMap, TreeData} from "./types";
import TreeNode from "./tree-node";


class Tree extends React.Component<Props, State> {

  private keyNodeMap: KeyNodeMap;

  constructor(props: Props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
    this.keyNodeMap = {};
    this.buildKeyMap();
    console.log(this.keyNodeMap);
  }

  buildKeyMap = () => {
    let data = this.state.data;
    this.keyNodeMap = {};
    this.keyNodeMap[data.key] = data;
    if (data.children && data.children.length > 0) {
      this.walk(data.children, data);
    }
  }

  walk = (children: Array<TreeData>, parent: TreeData) => {
    children.forEach((child: TreeData) => {
      child.parent = parent;
      this.keyNodeMap[child.key] = child;
      if (child.children && child.children.length > 0) {
        this.walk(child.children, child);
      }
    });
  }

  onCollapse = (key: string) => {

  }

  render() {
    return (
      <div className="tree">
        <div className="tree-nodes">
          <TreeNode onCollapse={() => this.onCollapse} data={this.props.data}/>
        </div>
      </div>
    )
  }
}

export default Tree;
