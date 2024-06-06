import type { Meta } from '@storybook/react';

import LanguageSwitcher from './LanguageSwitcher';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof LanguageSwitcher> = {
  title: 'Example/LanguageSwitcher',
  component: LanguageSwitcher,
  tags: ['autodocs'],
};

export default meta;

export const Count = {
  args: {},
};
