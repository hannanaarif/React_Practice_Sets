/*
Build an EmployeeCard component in React to display name, designation and work experience
of a person. Pass name, designation and work experience as props.
1. The colour of “Designation:” should be green.
2. The colour of “Experience:” should be blue.


*/

function EmployeeCard({name,designation,experience}) {

    return (
        <div>
            <h1 style={{color: "red"}}>Employee Card</h1>
            <h2 style={{color: "green"}}>{name}</h2>
            <h3 style={{color: "green"}}>{designation}</h3>
            <h4 style={{color: "blue"}}>{experience}</h4>
        </div>
    )
}

export default EmployeeCard;