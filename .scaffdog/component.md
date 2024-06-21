---
name: 'component'
description: 'For generate component files'
root: 'src'
output: '**/*'
ignore: []
questions:
  name: 'Enter component name. (no space)'
---

# {{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx

```tsx
import React from 'react';
import clsx from 'clsx';
import styles from './{{ inputs.name | pascal -}}.module.css';

type {{ inputs.name | pascal -}}Props = {
  className?: string;
}
export const {{ inputs.name | pascal -}} = ({ className, ...props }: {{ inputs.name | pascal -}}Props) => {
  return (
    <div className={clsx(className, styles.{{ inputs.name | camel -}})} {...props}></div>
  );
};

```

# {{ inputs.name | pascal }}/index.ts

```ts
export * from './{{ inputs.name | pascal -}}';
```

# {{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { {{ inputs.name | pascal }} } from './{{ inputs.name }}';

const meta = {
  title: 'ui/{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof {{ inputs.name | pascal }}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
```


# {{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.css
```css
.{{ inputs.name | camel }} {
  
}
```
