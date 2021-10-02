import History from "../Component/History/History";

export default {
  title: "History Section ",
  component: History,
  argTypes: {
    clear: { action: "This Will Clear all History" },
    setHistory: { action: "Update the Current History" },
  },
};

const mockData = [
  {
    calculate: "9 + 2",
    result: "11",
  },
  {
    calculate: "3 + 2",
    result: "5",
  },
];

const Template = (args) => <History data={mockData} {...args} />;

export const HistoryComponent = Template.bind({});

HistoryComponent.args = {
  backgroundColor: "#1f2326",
  buttonBackGroundColor: "#ffc207",
  color: "#eee",
};
