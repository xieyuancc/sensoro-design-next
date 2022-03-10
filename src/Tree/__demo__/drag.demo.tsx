
/**
 * title: 拖拽
 * desc: 可拖拽的树节点。
 */
import { useState } from 'react'
import { Tree, Checkbox } from '@sensoro-design/react'

const TreeData = [
  {
    title: 'Trunk 0-0',
    key: '0-0',
    children: [
      {
        title: 'Leaf 0-0-1',
        key: '0-0-1',
      },
      {
        title: 'Branch 0-0-2',
        key: '0-0-2',
        disableCheckbox: true,
        children: [
          {
            draggable: false,
            title: 'Leaf 0-0-2-1 (Drag disabled)',
            key: '0-0-2-1'
          }
        ]
      },
    ],
  },
  {
    title: 'Trunk 0-1',
    key: '0-1',
    children: [
      {
        title: 'Branch 0-1-1',
        key: '0-1-1',
        checkable: false,
        children: [
          {
            title: 'Leaf 0-1-1-1',
            key: '0-1-1-1',
          },
          {
            title: 'Leaf 0-1-1-2',
            key: '0-1-1-2',
          },
        ]
      },
      {
        title: 'Leaf 0-1-2',
        key: '0-1-2',
      },
    ],
  },
]

export default () => {
  const [treeData, setTreeData] = useState(TreeData)
  const [checkedKeys, setCheckedKeys] = useState([])
  const [checked, setChecked] = useState(false)
  return <div>
    <Checkbox
      checked={checked}
      onChange={setChecked}
      style={{marginBottom: 20}}
    >
      checkable
    </Checkbox>
    <Tree
      draggable
      blockNode
      checkable={checked}
      onDrop={({ dragNode, dropNode, dropPosition }) => {
        const loop = (data, key, callback) => {
          data.some((item, index, arr) => {
            if (item.key === key) {
              callback(item, index, arr)
              return true
            }
            if (item.children) {
              return loop(item.children, key, callback)
            }
          })
        }
        const data = [...treeData]
        let dragItem
        loop(data, dragNode.props._key, (item, index, arr) => {
          arr.splice(index, 1)
          dragItem = item
          dragItem.className = 'tree-node-dropover'
        })
        if (dropPosition === 0) {
          loop(data, dropNode.props._key, (item, index, arr) => {
            item.children = item.children || []
            item.children.push(dragItem)
          })
        } else {
          loop(data, dropNode.props._key, (item, index, arr) => {
            arr.splice(dropPosition < 0 ? index : index + 1, 0, dragItem)
          })
        }
        setTreeData([...data])

        setTimeout(() => {
          dragItem.className = ''
          setTreeData([...data])
        }, 1000)
      }}
      treeData={treeData}
    />
  </div>
}
