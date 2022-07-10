import React from "react"; 
import About from "./About"; 
export default { 
  title: "DanielJankoTola/app/About", 
  component: About, 
}; 
 
const Template = (args) => <About {...args} />; 
export const about= Template.bind({});