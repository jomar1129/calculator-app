import Display from "../Component/Display/Display";

export default {
  title: "Display",
  component: Display,
};

const Template = (args) => <Display calculate="1+2" result="3" {...args} />;

export const DisplayComponent = Template.bind({});

DisplayComponent.args = {
  backgroundColor: "#eee",
  color: "#1f2326",
};
