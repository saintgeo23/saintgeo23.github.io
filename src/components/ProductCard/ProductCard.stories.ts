import type { Meta } from '@storybook/react';
import ProductCard from './ProductCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductCard> = {
  title: 'Example/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
};

export default meta;

export const ProductCardConfig = {
  args: {
    title: 'Plasma Crash',
    url: 'https://en.yoyostorerewind.com/cdn/shop/files/plasmacrash13_ea45495a-962e-416b-8606-a7df92c932e8.jpg?v=1716873682&width=400',
    description: 'A variant of the Hydrogen Crash. Slightly smaller and with even more sleep.',
    cost: '119.99',
  },
};
