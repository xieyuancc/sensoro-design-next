
/**
 * title: 不同尺寸
 * desc:
 */
import React from 'react';
import { Tree, Radio } from '@sensoro-design/react';

const TreeNode = Tree.Node;

export default () => {
  const [size, setSize] = React.useState('default')

  return (
    <div>
      <Radio.Group
        options={['mini', 'small', 'default', 'large']}
        type='button'
        value={size}
        onChange={setSize}
        style={{ marginBottom: 20 }}
      >
      </Radio.Group>
      <Tree blockNode style={{marginRight: 20}} checkable size={size} >
        <TreeNode title="Trunk 0-0" key="0-0">
          <TreeNode title="Branch 0-0-0" key="0-0-0" disabled>
            <TreeNode title="Leaf" key="0-0-0-0" />
            <TreeNode title="Leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="Branch 0-0-1" key="0-0-1">
            <TreeNode title="Leaf" key="0-0-1-0" />
          </TreeNode>
        </TreeNode>
      </Tree>
    </div>
  )
}
