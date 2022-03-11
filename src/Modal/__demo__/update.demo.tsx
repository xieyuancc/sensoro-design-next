
/**
 * title: 手动更新和移除
 * desc: 手动更新和关闭通过 Modal的方法创建的对话框。
 */
import { Modal, Button, Spin } from '@sensoro-design/react';
import { IconCheckCircleFill, IconInfoCircleFill } from '@sensoro-design/react/icon';

const sleep = async (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time)
  })
}

export default () => {
  return <div>
    <Button
      type="primary"
      onClick={async () => {
        const modalIns = Modal.confirm({
          title: 'Submiting...',
          icon: <IconInfoCircleFill/>,
          content: <span>
            This modal will be successful after 1.5s. <Spin size={14} />
          </span>,
          footer: null
        });

        await sleep(1500);

        modalIns.update({
          icon: <IconCheckCircleFill/>,
          title: 'Success',
          content: 'This modal will be closed after 1.5s.',
        })

        await sleep(1500);

        modalIns.close();
      }}
    >
      Open Modal
    </Button>
  </div>
}
