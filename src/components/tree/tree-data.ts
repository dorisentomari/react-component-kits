import { TreeData } from "./types";

export const treeData: TreeData = {
  key: "爷爷",
  name: "爷爷",
  collapse: false,
  children: [
    {
      key: '爸爸',
      name: '爸爸',
      collapse: false,
      children: [
        { key: '爸爸的儿子',  name: '爸爸的儿子', collapse: false, },
        { key: '爸爸的女儿',  name: '爸爸的女儿', collapse: false, },
      ]
    },
    {
      key: '姑姑',
      name: '姑姑',
      collapse: false,
      children: [
        { key: '姑姑的儿子',  name: '姑姑的儿子', collapse: false, },
        { key: '姑姑的女儿',  name: '姑姑的女儿', collapse: false, },
      ]
    }
  ]
};
