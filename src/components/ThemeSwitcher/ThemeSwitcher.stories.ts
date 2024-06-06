import type { Meta } from '@storybook/react';

import ThemeSwitcher from './ThemeSwitcher';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Example/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
};

export default meta;

export const Count = {
  args: {},
};
