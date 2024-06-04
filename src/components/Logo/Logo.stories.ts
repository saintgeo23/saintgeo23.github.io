import type { Meta } from '@storybook/react'
import Logo from './Logo'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Logo> = {
  title: 'Example/Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta

export const LogoConfig = {
  args: {},
}
