/*
Build a React component with two buttons + and - which increases/decreases the font size of a
heading text “Welcome” by 1px. Keep the initial font size to 18px. Use useState Hook


*/

import { useState } from "react"

function Button(){
    const [font,setFont]=useState(18)


    return(<>
        <h2 style={{fontSize:`${font}px`}}>Welcome</h2>
        <button onClick={()=>setFont(font+1)}>+</button>
        <button onClick={()=>setFont(font-1)}>-</button>
    </>)
}

export default Button