import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ButtonIcon } from './ButtonIcon';
import { IconHeart } from '../Icons/IconHeart';

const meta = {
  title: 'ui/ButtonIcon',
  component: ButtonIcon,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof ButtonIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <IconHeart isLike={true} />,
  },
};
