import { createFormItem } from './modules/form-item';

// const item1 = createFormItem({
//   formItemType: 'input',
//   payload: { lable: '姓名', value: '' },
//   next: current => (current.payload.value === 'test1' ? item2 : item3)
// });

// const item2 = createFormItem({
//   formItemType: 'input',
//   payload: { lable: '姓名', value: '' },
//   next: current => (current.payload.value === 'test1' ? item2 : item3)
// });

// const item3 = createFormItem({
//   formItemType: 'input',
//   payload: { lable: '姓名', value: '' },
//   next: current => (current.payload.value === 'test1' ? item3 : item4)
// });

// const item4 = createFormItem({
//   formItemType: 'input',
//   payload: { lable: '姓名', value: '' },
//   next: current => (current.payload.value === 'test1' ? item2 : item3)
// });

const item1 = createFormItem('input', { lable: '姓名', value: '' }, current =>
  current.payload.value === 'test1' ? item2 : item3
);

const item2 = createFormItem('input', { lable: '姓名', value: '' }, current =>
  current.payload.value === 'test1' ? item2 : item3
);

const item3 = createFormItem('input', { lable: '姓名', value: '' }, current =>
  current.payload.value === 'test1' ? item3 : item4
);

const item4 = createFormItem('input', { lable: '姓名', value: '' }, current =>
  current.payload.value === 'test1' ? item2 : item3
);

export default item1;
