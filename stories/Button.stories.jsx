import React from 'react';

import { Button } from './Button';

export default {
  title: 'GoldblumUI/Button',
  component: Button,
  argTypes: {
    label: {
      defaultValue: 'Button',
    },
    type: {
      control: 'select',
      options: ['primary', 'ghost', 'dashed', 'link']
    },
    disabled: {
      defaultValue: false,
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large']
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Next quote'
};


