/**
 * title: 渐隐切换
 * desc: 指定 `animation` 为 `fade` 使用渐隐切换效果。
 */
import { Carousel } from '@sensoro-design/react';

const imageSrc = [
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp'
];

export default () => {
  return (
    <Carousel
      autoPlay
      animation="fade"
      showArrow="never"
      style={{
        width: 600,
        height: 240,
      }}
    >
      {imageSrc.map((src, index) => (
        <div key={index} style={{ width: '100%' }}>
          <img
            src={src}
            style={{
              width: '100%',
            }}
          />
        </div>
      ))}
    </Carousel>
  );
}
