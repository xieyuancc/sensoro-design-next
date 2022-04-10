/**
 * title: 虚拟列表
 * desc: 通过指定 `virtualListProps` 来开启虚拟列表，在大量数据时获得高性能表现。
 */
import React from 'react';
import { Tree, Button } from '@sensoro-design/react';

function loop(path = '0', level = 2) {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const key = `${path}-${i}`;
    const treeNode = {
      label: key,
      key,
    };

    if (level > 0) {
      treeNode.children = loop(key, level - 1);
    }

    list.push(treeNode);
  }
  return list;
}

const treeData = loop();

export default () => {
  const treeRef = React.useRef();

  return (
    <div>
      <Button
        type="primary"
        style={{ marginBottom: 20 }}
        onClick={() => {
          treeRef.current && treeRef.current.scrollIntoView('0-0-2-2');
        }}
      >
        Scroll to 0-0-2-2, i.e. the 26th.
      </Button>
      <Tree
        ref={treeRef}
        blockNode
        checkable
        treeData={treeData}
        virtualListProps={{
          height: 200,
        }}
      />
    </div>
  );
};
