import React from "react";

import  App from '../../App'

export default {
    title: 'GABRIELTERRAZAS/app',
    component: App,
    argTypes: { handleClick: {action: 'handleClick'}}
}

const Template = args => <App  {...args}/>
export const app = Template.bind({});
app.args = {
    backgroundColor: '#21a19d',
}