/*
Build a React component called UserProfile that receives an object representing a user as prop
and display the details on the DOM.

Data:
const userData = {
    name: 'John',
    age: 25,
    email: 'john@example.com',
   }
*/


function UserProfile({userData}){
    return (
        <>
        <h1>{userData.name}</h1>
        <h2>{userData.age}</h2>
        <h3>{userData.email}</h3>
        </>
    )
}

export default UserProfile;
