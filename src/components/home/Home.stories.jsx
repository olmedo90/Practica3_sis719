import React from "react";
import Home from "./Home";
export default {
  title: "Fanor-Choque-Aguirre/app/Home",
  component: Home,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
},
};

const Template = (args) => <Home {...args} />;
export const home= Template.bind({});
home.args = {
  backgroundColor: true,
 
};