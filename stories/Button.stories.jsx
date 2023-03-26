import React from 'react';

import { Button } from './Button';

export default {
  title: 'GoldblumUI/Button',
  component: Button,
  argTypes: {
    label: {
      control: 'text'
    },
    type: {
      control: 'select',
      options: ['primary', 'ghost', 'dashed', 'link']
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large']
    },
    disabled: {
      control: 'boolean'
    }
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Next quote',
  disabled: false,
  type: 'primary',
  size: 'default'
};


