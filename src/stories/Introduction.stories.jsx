import React from "react"; 
import App from "../App"; 
export default { 
  title: "DanielJankoTola/app", 
  component: App, 
}; 
 
const Template = (args) => <App {...args} />; 
export const app= Template.bind({});