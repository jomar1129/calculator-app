import CalcFunctions from "../Component/Buttons/CalcFunctions";

export default {
  title: "Delete Buttons",
  component: CalcFunctions,
  argTypes: {
    resetCalculator: { action: "This clear all current displayed" },
    deletelastValue: {
      action: "Will delete all the last value that is being input",
    },
  },
};

const Template = (args) => <CalcFunctions {...args} />;

export const CalcFunctionsComponent = Template.bind({});

CalcFunctionsComponent.args = {
  backgroundColor: "#ffc207",
  color: "#eee",
};
