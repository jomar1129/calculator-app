import Digits from "../Component/Buttons/Digits";

export default {
  title: "Digit Buttons",
  component: Digits,
  argTypes: {
    updateCalculate: { action: "This Will Input number on the Display" },
    calculateEquals: { action: "Will Calculate all the operations" },
  },
};

const Template = (args) => <Digits {...args} />;

export const DigitsComponent = Template.bind({});

DigitsComponent.args = {
  backgroundColor: "#5f4bb6",
  equalSignBackground: "#8c38ff",
  color: "#eee",
};
