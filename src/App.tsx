import React from 'react';

// import Message from "./components/message";
import Tree from "./components/tree";
import { treeData } from "./components/tree/tree-data";

function onCollapse() {

}

function App() {
  return (
    <div className="App">
      <Tree onCollapse={() => onCollapse} data={treeData} />
    </div>
  );
}

export default App;
