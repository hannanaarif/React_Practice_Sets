/*
Create an array of objects representing students marks out of 100. Each object consists of: id,
name and marks. Build a React component that calculates the mean marks of all the students to
see if the institute passes the criteria of the certification.
If the mean is above 80, display on the DOM Certification Approved
If the mean is below 80, display on the DOM Certification Not Approved

DATA:
*/
const studentData = [
 {
 id: 1,
 name: 'Nitin',
 marks: 78,
 },
 {
 id: 2,
 name: 'Mehak',
 marks: 95,
 },
 {
 id: 3,
 name: 'Mehul',
 marks: 65,
 },
 {
 id: 4,
 name: 'Nina',
 marks: 96,
 },
]

function Student(){

    const TotalMarks=studentData.reduce((acc,data)=>(
        acc+data.marks
    ),0)
    const average=Number(TotalMarks/studentData.length)

    return(<>
    <h2>{average>=80?'Certification Approved':'Certification Not Approved'}</h2>
    </>)
}

export default Student