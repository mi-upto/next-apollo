import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from './Loading';

const meta = {
  title: 'ui/Loading',
  component: Loading,
  tags: ['autodocs'],
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
