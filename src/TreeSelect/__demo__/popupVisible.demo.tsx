
/**
 * title: 控制下拉框的展开收起
 * desc:
 * 默认展开下拉框。通过 popupVisible 和 onVisibleChange 控制下拉框的展开和收起。
 * 例如以下demo，在鼠标移出下拉框和弹出框的时候触发onVisibleChange，参数为 false，收起下拉框。 具体 onVisibleChange 的触发事件可查看[Trigger](/components/trigger)组件文档
 */
import React from 'react';
import { TreeSelect } from '@sensoro-design/react';

const TreeNode = TreeSelect.Node;

export default () => {
  const [visible, setVisible] = React.useState(false);

  return <TreeSelect
    placeholder="hover to show options"
    popupVisible={visible}
    // 在鼠标移出下拉框和弹出框的时候触发，具体触发时机可查看Trigger组件文档
    onVisibleChange={setVisible}
    triggerProps={{
      trigger: 'hover'
    }}
    style={{ width: 300 }}
    allowClear
  >
    <TreeNode key="node1" title="Trunk">
      <TreeNode key="node2" title="Leaf" />
    </TreeNode>
    <TreeNode key="node3" title="Trunk2">
      <TreeNode key="node4" title="Leaf" />
      <TreeNode key="node5" title="Leaf" />
    </TreeNode>
  </TreeSelect>
}
