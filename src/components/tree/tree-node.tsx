import React from "react";
import {Props, TreeData} from "./types";

import filePng from '../../assets/file.png';
import closedFolderPng from '../../assets/closed-folder.png';
import loadingPng from '../../assets/loading.gif';
import openedFolderPng from '../../assets/opened-folder.png';

class TreeNode extends React.Component<Props> {

  render() {
    const {data: {name, children, key, collapse}, onCollapse} = this.props;
    // caret 是打开关闭的箭头，icon 是 文件夹/文件 的图标
    let caret = null, icon = null;

    if (children) {
      if (children.length > 0) {
        caret = (
          <span
            className={`collapse ${collapse ? 'caret-right' : 'caret-down'}`}
            onClick={() => this.props.onCollapse(key)}
          />
        );
        icon = collapse ? closedFolderPng : openedFolderPng;
      } else {
        caret = null;
        icon = filePng;
      }
    } else {
      caret = (
        <span
          className="collapse caret-right"
          onClick={() => this.props.onCollapse(key)}
        />
      );
      icon = closedFolderPng;
    }

    return (
      <div className="tree-node">
        <div className="inner">
          {caret}
          <span className="content">
            <img src={icon} style={{width: '20px', height: '20px'}} alt=""/>
            {name}
          </span>
        </div>
        {
          (children && children.length > 0) && (
            <div className="children">
              {
                children.map((item: TreeData) => (
                  <TreeNode onCollapse={onCollapse} data={item} key={item.key}/>
                ))
              }
            </div>
          )
        }
      </div>
    );
  }
}

export default TreeNode;

