/*
 Use the cartoons data from above question (2) and build a React component that takes the
superpower ”Intelligence”, as prop and display the details of the character having that super
power. Show details on DOM in the format “name - superpower - magnitude”.

*/

function Cartoon({cartoons}){

    return(<>
    <ul>
        {cartoons.filter(cartoon => cartoon.superpower === "Intelligence") // Step 1: Filter
          .map(cartoon => ( // Step 2: Map to JSX
            <li key={cartoon.id}>
              <strong>{cartoon.name}</strong> - {cartoon.superpower} (Power: {cartoon.magnitude})
            </li>
          ))}
      </ul>
    </>)


}

export default Cartoon;