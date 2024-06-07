import type { Meta } from '@storybook/react';

import ProductList from './ProductList';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductList> = {
  title: 'Example/ProductList',
  component: ProductList,
  tags: ['autodocs'],
};

export default meta;

export const Count = {
  args: {},
};
