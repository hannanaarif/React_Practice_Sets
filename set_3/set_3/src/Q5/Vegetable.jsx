import { useState } from "react"

/*
Build a React component to display the list of all the vegetables and their pick date as ordered
list. Create a button which says “Highlight Fresh Vegetables”. On click of the button change the
color of the vegetable to green whose pick date is ‘2023-03-30’.

*/
const vegetables = [
    {
    id: 1,
    name: 'Carrots',
    pickDate: '2023-03-25',
    },
    {
    id: 2,
    name: 'Broccoli',
    pickDate: '2023-03-30',
    },
    {
    id: 3,
    name: 'Peppers',
    pickDate: '2023-03-25',
    },
    {
    id: 4,
    name: 'Tomatoes',
    pickDate: '2023-03-27',
    },
    {
    id: 5,
    name: 'Ladies Finger',
    pickDate: '2023-03-30',
    },
   ]
   

function Vegetable(){
    const [highlightFresh,setHighlightFresh]=useState(false)

    function handleFresh(){
       setHighlightFresh(true)
    }

    return (<>
        console.log(highlightFresh)
        {vegetables.map((veg)=>(
            <li key={veg.id}
            style={{backgroundColor:highlightFresh && veg.pickDate==="2023-03-30"?"lightgreen":"transparent"}}
            >
                {veg.id}- {veg.name}-{veg.pickDate}
            </li>
        ))}
        <button onClick={handleFresh}>Highlight Fresh Vegetables</button>
    </>)


}

export default Vegetable