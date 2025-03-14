/*
Build a React component to display the flowers of a bouquet in an ordered list on the DOM
which has a price above 2000. Pass data as prop.

const bouquet = [
 {
 id: 1,
 flowers: ['rose', 'lily', 'marigold'],
 totalFlowers: 9,
 price: 1400,
 },
 {
 id: 2,
 flowers: ['snapdragon', 'sunflower'],
 totalFlowers: 10,
 price: 3400,
 },
]
Expected Output
1. snapdragon
2. sunflower

*/

function Flowers({bouquet}){
return(<ol>
{ bouquet.filter((bouq)=>bouq.price>2000).map((bouq)=>(
    bouq.flowers.map((flower,index)=>(
        <li key={index}>{flower}</li>
    )
)))},
</ol>)

}

export default Flowers