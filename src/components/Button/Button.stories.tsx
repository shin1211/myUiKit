import React from "react";
import { withDesign } from "storybook-addon-designs";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
// import myImage from "../../images/example.JPG";

export default {
  title: "Button",
  component: Button,
  decorators: [withDesign],
  // argTypes: {
  //   size: { control: "select" },
  // },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultBtn = Template.bind({});
DefaultBtn.args = {
  label: "Button",
  text: "Button",
  size: "md",
  // variant: 'primary',
};

DefaultBtn.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/qhmGaIBcV70IXTUJw8SLWP/Browk-UI-KIT-(Community)-(Community)?node-id=2358%3A8998",
  },
};
