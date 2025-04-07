import { createContext } from "react";
import UserProfile from "./UserProfile";

/*
Create a React app with UserContext that stores the user's information (name, email, and role).
Create a UserProfile component that displays the user's name and email obtained from
the UserContext using useContext. On change of the user name from the dropdown show the
relevant name and email as shown in the screenshot below

*/
const users = [
  {
    id: 1,
    name: "Tanay Pratap",
    email: "tanay@example.com",
    role: "Super Mentor",
  },
  {
    id: 2,
    name: "Tanvi Priya",
    email: "tanvi@example.com",
    role: "CEO",
  },
  {
    id: 3,
    name: "Akanksha Choudhary",
    email: "akanksha@example.com",
    role: "Super Mentor",
  },
];

export const userContext=createContext();

function User(){

  return(<>
    <userContext.Provider value={{users}}>
      <UserProfile/>
    </userContext.Provider>
  </>)

}

export default User;
