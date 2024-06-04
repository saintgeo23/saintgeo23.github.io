import type { Meta } from '@storybook/react'
import CartButton from './CartButton'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CartButton> = {
  title: 'Example/CartButton',
  component: CartButton,
  tags: ['autodocs'],
}

export default meta

export const CartButtonConfig = {
  args: {},
}
