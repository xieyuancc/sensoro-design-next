/**
 * title: 拖拽排序
 * desc: 可以配合 `react-sortable-hoc` 实现拖拽排序。
 */
import { useState } from 'react';
import { Table } from '@sensoro-design/react';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';

const arrayMoveMutate = (array, from, to) => {
	const startIndex = to < 0 ? array.length + to : to;

	if (startIndex >= 0 && startIndex < array.length) {
		const item = array.splice(from, 1)[0];
		array.splice(startIndex, 0, item);
	}
};

const arrayMove = (array, from, to) => {
	array = [...array];
	arrayMoveMutate(array, from, to);
	return array;
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const initialData = [{
  key: '1',
  name: 'Jane Doe',
  salary: 23000,
  address: '32 Park Road, London',
  email: 'jane.doe@example.com'
}, {
  key: '2',
  name: 'Alisa Ross',
  salary: 25000,
  address: '35 Park Road, London',
  email: 'alisa.ross@example.com'
}, {
  key: '3',
  name: 'Kevin Sandra',
  salary: 22000,
  address: '31 Park Road, London',
  email: 'kevin.sandra@example.com'
}, {
  key: '4',
  name: 'Ed Hellen',
  salary: 17000,
  address: '42 Park Road, London',
  email: 'ed.hellen@example.com'
}, {
  key: '5',
  name: 'William Smith',
  salary: 27000,
  address: '62 Park Road, London',
  email: 'william.smith@example.com'
}];

const SortableContainer = sortableContainer((props) => {
  return <tbody {...props} />;
});

const SortableItem = sortableElement((props) => {
  return <tr style={{ cursor: 'move' }} {...props} />
});

export default () => {
  const [data, setData] = useState(initialData);

  function onSortEnd({ oldIndex, newIndex }) {
    if (oldIndex !== newIndex) {
      const newData = arrayMove([].concat(data), oldIndex, newIndex).filter(el => !!el);
      console.log('New Data: ', newData);
      setData(newData);
    }
  }

  const DraggableContainer = props => (
    <SortableContainer
      onSortEnd={onSortEnd}
      helperContainer={() => document.querySelector('.arco-drag-table-container table tbody')}
      updateBeforeSortStart={({ node }) => {
        const tds = node.querySelectorAll('td');
        tds.forEach((td) => {
          td.style.width = td.clientWidth + 'px';
        });
      }}
      {...props}
    />
  );

  const DraggableRow = props => {
    const { record, index, ...rest } = props;
    return <SortableItem index={index}  {...rest} />;
  };

  const components = {
    body: {
      tbody: DraggableContainer,
      row: DraggableRow,
    }
  };

  return <Table className="arco-drag-table-container" components={components} columns={columns} data={data} />;
}
