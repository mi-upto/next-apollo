import type { Meta, StoryObj } from '@storybook/react';
import { ErrorDisplay } from './ErrorDisplay';

const meta = {
  title: 'components/ErrorDisplay',
  component: ErrorDisplay,
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    errorText: 'error text',
  },
};
