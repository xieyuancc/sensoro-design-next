/**
 * title: 响应式排列
 * desc: 支持响应式排列。
 */
import { Descriptions } from '@sensoro-design/react';

const data = [{
  label: 'Name',
  value: 'Socrates',
}, {
  label: 'Mobile',
  value: '123-1234-1234',
}, {
  label: 'Residence',
  value: 'Beijing'
}, {
  label: 'Hometown',
  value: 'Beijing',
}, {
  label: 'Date of Birth',
  value: '2020-05-15',
  span: 2,
}, {
  label: 'Address',
  value: 'Yingdu Building, Zhichun Road, Beijing'
}];

export default () => {
  return (
    <Descriptions title="Responsive" data={data} border column={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 3, xxl: 4 }} />
  )
}
