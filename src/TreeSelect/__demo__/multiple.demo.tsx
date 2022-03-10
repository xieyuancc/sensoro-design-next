
/**
 * title: 多选
 * desc: 多选
 */
import React from 'react';
import { TreeSelect, Space } from '@sensoro-design/react';
import { IconCalendar } from '@sensoro-design/react/icon';

const treeData = [
  {
    key: 'node1',
    icon: <IconCalendar />,
    title: 'Trunk',
    children: [
      {
        key: 'node2',
        title: 'Leaf',
      },
    ],
  },
  {
    key: 'node3',
    title: 'Trunk2',
    icon: <IconCalendar />,
    children: [
      {
        key: 'node4',
        title: 'Leaf',
      },
      {
        key: 'node5',
        title: 'Leaf',
      },
    ],
  },
];

export default class Demo extends React.Component {
  state = {
    value: [],
  };

  handleChange = (value) => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <Space size="large">
        <TreeSelect
          allowClear
          placeholder="Please select ..."
          multiple
          showSearch
          treeData={treeData}
          value={this.state.value}
          onChange={this.handleChange}
          style={{ width: 300 }}
        />
        <TreeSelect
          allowClear
          placeholder="Max display 2 tags"
          multiple
          showSearch
          maxTagCount={2}
          treeData={treeData}
          value={this.state.value}
          onChange={this.handleChange}
          style={{ width: 300 }}
        />
      </Space>
    );
  }
}
