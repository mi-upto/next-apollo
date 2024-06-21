import type { Meta, StoryObj } from '@storybook/react';
import { IconHeart } from './IconHeart';

const meta = {
  title: 'ui/Icons/IconHeart',
  component: IconHeart,
  tags: ['autodocs'],
} satisfies Meta<typeof IconHeart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const On: Story = {
  args: {
    isLike: true,
  },
};
export const Off: Story = {
  args: {
    isLike: false,
  },
};
