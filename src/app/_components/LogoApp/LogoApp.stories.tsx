import type { Meta, StoryObj } from '@storybook/react';
import { LogoApp } from './LogoApp';

const meta = {
  title: 'components/LogoApp',
  component: LogoApp,
  tags: ['autodocs'],
} satisfies Meta<typeof LogoApp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
