/*
Build a React component called About that accepts three props: heading, your name and
learning. Inside the component, render a <h1> tag with the heading prop, <h2> tag with your
name and a button below that which says “Know More”. On the click of the button, show the
learning in a <p> tag just below the button.

DATA:

const heading = 'About Me'
const name = 'Preeti' // you can put your name
const learning = 'I am learning React JS currently at neoG Camp.'

*/

import { useState } from "react";

function About({heading,name,learning}){

    const [isLearning,setLearning]=useState(false);




    return (
        <>
        <h1>{heading}</h1>
        <h2>{name}</h2>
        <button onClick={()=>setLearning(!isLearning)}>Know More</button>
        {isLearning && <p>{learning}</p>}
        </>
    )

}

export default About;