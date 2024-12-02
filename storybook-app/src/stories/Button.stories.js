import { fn } from '@storybook/test';

import { Button } from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'UI Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};
