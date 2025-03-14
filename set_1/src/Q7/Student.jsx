/*

 Given a student object with student name and the marks for english, maths and computers. If
the total marks of a student is >= 225, the grade is A, >=180 the grade is B, >=150 the grade is
C, otherwise the grade is D. Build a React Component that takes the student object as props
and uses it to show all the students details, total marks and grade on the DOM as shown in the
image below.

const student = {
 name: 'John Doe',
 english: 90,
 maths: 80,
 computers: 70,
}


*/

function Student({student}) {
    const totalMarks = student.english + student.maths + student.computers;
    return (
        <div> 
            <h1>Student Details</h1>
            <p>Name: {student.name}</p>
            <p>English: {student.english}</p>
            <p>Maths: {student.maths}</p>
            <p>Computers: {student.computers}</p>
            <p>Total Marks: {totalMarks}</p>
            <p>Grade: {totalMarks >= 225 ? 'A' : totalMarks >= 180 ? 'B' : totalMarks >= 150 ? 'C' : 'D'}</p>
        </div>
    )
}

export default Student;

