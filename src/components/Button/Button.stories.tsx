import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultBtn = Template.bind({});
DefaultBtn.args = {
  label: "Button",
  text: "Button",
  // variant: 'primary',
};
