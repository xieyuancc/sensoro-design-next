
/**
 * title: 显示连接线
 * desc: 为 `Tree` 添加 `showLine` 属性即可使树具有连接线
 */
import { useState } from 'react';
import { Tree, Switch, Typography } from '@sensoro-design/react';

const TreeData = [
  {
    title: 'Trunk 1',
    key: '0-0',
    children: [
      {
        title: 'Trunk 1-0',
        key: '0-0-0',
        children: [
          { title: 'leaf', key: '0-0-0-0' },
          {
            title: 'leaf',
            key: '0-0-0-1',
            children: [{ title: 'leaf', key: '0-0-0-1-0' }],
          },
          { title: 'leaf', key: '0-0-0-2' },
        ],
      },
      {
        title: 'Trunk 1-1',
        key: '0-0-1',
      },
      {
        title: 'Trunk 1-2',
        key: '0-0-2',
        children: [
          { title: 'leaf', key: '0-0-2-0' },
          {
            title: 'leaf',
            key: '0-0-2-1',
          },
        ],
      },
    ],
  },
  {
    title: 'Trunk 2',
    key: '0-1',
  },
  {
    title: 'Trunk 3',
    key: '0-2',
    children: [
      {
        title: 'Trunk 3-0',
        key: '0-2-0',
        children: [
          { title: 'leaf', key: '0-2-0-0' },
          { title: 'leaf', key: '0-2-0-1' },
        ],
      },
    ],
  },
]

export default () => {
  const [treeData, setTreeData] = useState(TreeData)
  const [checked, setChecked] = useState(true)


  return <div>
    <div>
      <Typography.Text>showLine</Typography.Text>
      <Switch style={{marginLeft: 12}} checked={checked} onChange={setChecked}></Switch>
    </div>
    <Tree
      defaultSelectedKeys={['0-0-1']}
      treeData={treeData}
      showLine={checked}
    >
    </Tree>
  </div>
}
