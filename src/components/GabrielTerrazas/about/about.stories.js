import React from "react";

import About from '../../about/About'

export default {
    title: 'GABRIELTERRAZAS/about',
    component: About,
    argTypes: { handleClick: {action: 'handleClick'}}
}

const Template = args => <About  {...args}/>
export const about = Template.bind({});
about.args = {
    bibliografia: ' Hello! I am Edson. I am a Systems Engineering student. I study at U.A.T.F, enjoy long walks with friends, and believe that artificial intelligence will inevitably rule us all one day. Put Study Desire to Matter!',
}