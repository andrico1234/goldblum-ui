import React from 'react';

import { Quote } from './Quote';

export default {
  title: 'GoldblumUI/Quote',
  component: Quote,
  argTypes: {
    quote: {
      control: 'select',
      options: ['God help us we are in the hands of engineers', 'Your scientists were so preoccupied with whether or not they could that they didnt stop to think if they should', 'He was a great man And he was also me']
    }
  }
};

const Template = (args) => <Quote {...args} />;

export const Default = Template.bind({});

Default.args = {
  quote: 'God help us we are in the hands of engineers'
};
