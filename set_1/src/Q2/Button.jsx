/* Build a React component to display a button with custom styles and button text as ‘Start’. The
styles should be passed as props.
Data:
const backgroundColor = 'lightgreen'
const color = 'darkgreen'
const borderRadius = '5px'
const padding = '10px'
*/

function Button({backgroundColor,color,borderRadius,padding}) {
    return (
        <button style={{backgroundColor,color,borderRadius,padding}}>Start</button>
    )
}

export default Button;
