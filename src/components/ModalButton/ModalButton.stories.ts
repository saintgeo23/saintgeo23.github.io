import type { Meta } from '@storybook/react';

import ModalButton from './ModalButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ModalButton> = {
  title: 'Example/ModalButton',
  component: ModalButton,
  tags: ['autodocs'],
};

export default meta;

export const ModalConfig = {
  args: {},
};
