import React from "react";
import  Home  from '../../home/Home';

export default{
    title:'GABRIELTERRAZAS/home',
    component: Home,
    argTypes: {}
}

const Template = args => <Home {...args}/>
export const home = Template.bind({})
home.args={
    name:'GABRIEL TERRAZAS',
    cambioBiografia:false,
    miniBioStoryBook:[
        {
            emoji: '🥗',
            text: 'fueled by salad'
        },
        {
            emoji: '🌎',
            text: 'based in the Bolivia'
        },
        {
            emoji: "💼",
            text: "Software systems engineer"
        },
        {
            emoji: "📧",
            text: "olmedito.90@gmail.com"
        }
    ]
}