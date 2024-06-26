import type { Meta, StoryObj } from '@storybook/react';
import { TrackCard } from './TrackCard';
import TrackJson from '@/mocks/json/tracks.json';
import AuthorJson from '@/mocks/json/author.json';

const track = TrackJson[0];
const author = AuthorJson;

const meta = {
  title: 'components/TrackCard',
  component: TrackCard,
  tags: ['autodocs'],
  args: {
    id: track.id,
    title: track.title,
    length: track.length,
    thumbnail: track.thumbnail,
    modulesCount: track.modulesCount,
    author,
  },
} satisfies Meta<typeof TrackCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
