/*Build a React component to display a list of stationery items with a header. The items and
header should be passed as props. Header should be “Stationery Items”.
DATA
const items = ['pen', 'pencil', 'ruler', 'eraser']*/

function Stationary({items}) {
    return (
        <div>
            <h1>Stationery Items</h1>
            {items.map((item) => (
                <h2>{item}</h2>
            ))}
        </div>
    )
}

export default Stationary;