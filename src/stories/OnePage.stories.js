import OnePageTemplate from '../components/OnePage';

export default {
  title: 'Example/Templates',
  component: OnePageTemplate,
};

const Template = (args) => <OnePageTemplate {...args} />;

export const OnePage = Template.bind({});
OnePage.args = { title: 'Fixed' };
