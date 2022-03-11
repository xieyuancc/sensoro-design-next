/**
 * title: 弹出方向
 * desc: 通过 `position` 支持指定 6 种弹出方位，分别是：`top: 向上`, `tl: 左上`, `tr: 右上`, `bottom: 下方(默认)`, `bl: 左下`, `br: 右下`。
 */
import { Dropdown, Menu, Button, Space } from '@sensoro-design/react';

const positions = ['bl', 'bottom', 'br', 'tl', 'top', 'tr'];
const descriptions = ['BottomLeft', 'BottomCenter', 'BottomRight', 'TopLeft', 'Top', 'TopRight'];

export default () => {
  return (
    <Space size="large" className="dropdown-demo">
      {positions.map((position, index) => (
        <Dropdown
          key={index}
          position={position}
          droplist={
            <Menu>
              <Menu.Item key="1">Menu Item 1</Menu.Item>
              <Menu.Item key="2">Menu Item 2</Menu.Item>
              <Menu.Item key="3">Menu Item 3</Menu.Item>
            </Menu>
          }
        >
          <Button type="secondary">
            {descriptions[index]}
          </Button>
        </Dropdown>
      ))}
    </Space>
  )
}
