import React from 'react';
import Navbar from '../components/Navbar';

export default {
  title: 'Example/Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Fixed = Template.bind({});
Fixed.args = { title: 'Fixed' };
