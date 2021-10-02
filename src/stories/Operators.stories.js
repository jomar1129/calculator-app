import Operators from "../Component/Buttons/Operators";

export default {
  title: "Operator Buttons",
  component: Operators,
  argTypes: {
    updateCalculate: { action: "This Will Input operator on the Display" },
  },
};

const Template = (args) => <Operators {...args} />;

export const OperatorsComponent = Template.bind({});

OperatorsComponent.args = {
  backgroundColor: "#1f2326",
  color: "#eee",
};
