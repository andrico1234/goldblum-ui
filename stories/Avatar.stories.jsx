import React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'GoldblumUI/Avatar',
  component: Avatar,
  argTypes: {
    mood: {
      control: 'select',
      options: ['happy', 'suave', 'sexy']
    }
  }
};

const Template = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  size: "large",
  mood: 'happy'
};
