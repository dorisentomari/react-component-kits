export interface TreeData {
  key: string;
  name: string;
  checked?: boolean;
  collapse: boolean;
  children?: Array<TreeData>;
  parent?: TreeData;
}

export interface Props {
  data: TreeData;
  onCollapse: (key: any) => void;
}

export interface State {
  data: TreeData;
}

export type KeyNodeMap = Record<string, TreeData>;
