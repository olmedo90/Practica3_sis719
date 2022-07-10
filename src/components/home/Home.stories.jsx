
import React from "react"; 
import Home from "./Home"; 


export default { 
  title: "EdgarOcampoOcampo/app/Home", 
  component: Home, 
  argTypes: {handleClick:'handleClick'}
}; 
 
const Template = (args) => <Home {...args} />; 
export const home= Template.bind({});
home.args = {
    label: 'este es un botton de ejemplo',
}