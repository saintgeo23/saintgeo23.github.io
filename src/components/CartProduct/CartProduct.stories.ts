import type { Meta } from '@storybook/react';
import CartProduct from './CartProduct';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CartProduct> = {
  title: 'Example/CartProduct',
  component: CartProduct,
  tags: ['autodocs'],
};

export default meta;

export const CartProductConfig = {
  args: {
    title: 'Plasma Crash',
    url: 'https://en.yoyostorerewind.com/cdn/shop/files/plasmacrash13_ea45495a-962e-416b-8606-a7df92c932e8.jpg?v=1716873682&width=400',
    cost: '119.99',
  },
};
