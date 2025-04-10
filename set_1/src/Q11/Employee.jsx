/*Considering above data given in question 8, add a border around the employee details whose
designation is “President”
*/


const employees = [
    {
      name: "Jack Smith",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 24000,
    },
    {
      name: "Mary Robbins",
      level: 3,
      dept: "Fin",
      designation: "Manager",
      salary: 28000,
    },
    {
      name: "Steve Williams",
      level: 4,
      dept: "Ops",
      designation: "President",
      salary: 35000,
    },
    {
      name: "Bob Andrews",
      level: 1,
      dept: "Fin",
      designation: "Trainee",
      salary: 16500,
    },
    {
      name: "Dave Martin",
      level: 2,
      dept: "Fin",
      designation: "Manager",
      salary: 21700,
    },
    {
      name: "Julia Clarke",
      level: 3,
      dept: "Ops",
      designation: "Manager",
      salary: 26900,
    },
    {
      name: "Kathy Jones",
      level: 4,
      dept: "Tech",
      designation: "President",
      salary: 42500,
    },
    {
      name: "Tom Bresnan",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 22200,
    },
  ];


function Employee(){
    return (
        <div>
            <h1>Employee Details</h1>
            {
                employees.map((employee) => (
                    employee.designation === "President" ? <li style={{border: '1px solid black'}} key={employee.name}>{employee.name} , designation: {employee.designation} , salary: {employee.salary}</li>:
                    <li key={employee.name}>{employee.name} , designation: {employee.designation} , salary: {employee.salary}</li>
                ))
            }
        </div>
    )
}

export default Employee;
