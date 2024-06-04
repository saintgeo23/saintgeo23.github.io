import type { Meta } from '@storybook/react';
import Operation from './Operation';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Operation> = {
  title: 'Example/Operation',
  component: Operation,
  tags: ['autodocs'],
};

export default meta;

export const OperationConfig = {
  args: {
    title: 'Plasma Crash',
    images: [
      'https://en.yoyostorerewind.com/cdn/shop/files/plasmacrash13_ea45495a-962e-416b-8606-a7df92c932e8.jpg?v=1716873682&width=400',
      'https://en.yoyostorerewind.com/cdn/shop/files/plasmacrash15_3e27a5ce-6191-4548-b7ba-f1e19f2a8e25.jpg?v=1716873682&width=400',
    ],
    description: 'A variant of the Hydrogen Crash. Slightly smaller and with even more sleep.',
    cost: '119.99',
    category: 'Bi-metal',
  },
};
