import React from "react"; 
import About from "./About"; 
export default { 
  title: "EdgarOcampoOcampo/app/about", 
  component: About,
  argTypes: {handleClick:'handleClick'} 
}; 
 
const Template = (args) => <About {...args} />; 
export const about= Template.bind({});
about.args = {
  label:'este es un texto'
}