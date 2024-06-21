import type { Meta, StoryObj } from '@storybook/react';
import { CardPost } from './CardPost';
import TrackJson from '@/mocks/json/tracks.json';

const postData = TrackJson;

const meta = {
  title: 'components/CardPost',
  component: CardPost,
  tags: ['autodocs'],
  args: {
    id: postData.id,
    title: postData.title,
    category: postData.category,
    createdAt: postData.createdAt,
    body: postData.body,
    imageUrl: postData.imageUrl,
  },
} satisfies Meta<typeof CardPost>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
