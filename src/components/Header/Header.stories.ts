import type { Meta } from '@storybook/react'
import Header from './Header'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'],
}

export default meta

export const HeaderConfig = {
  args: {},
}
