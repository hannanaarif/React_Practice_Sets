/*
Create a React component that fetches a list of users from an API endpoint
using useEffect hook and displays the name, email, and website of each user on the screen
using the useState hook. Add a dropdown which filters the users by company name.



*/

import { useEffect, useState } from "react";

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            {
              name: "John Doe",
              email: "john@example.com",
              website: "example.com",
              company: "ABC Inc",
            },
            {
              name: "Jane Doe",
              email: "jane@example.com",
              website: "example.com",
              company: "XYZ Corp",
            },
            {
              name: "Bob Smith",
              email: "bob@example.com",
              website: "example.com",
              company: "ABC Inc",
            },
            {
              name: "Alice Brown",
              email: "alice@example.com",
              website: "example.com",
              company: "ACME Corp",
            },
            {
              name: "Charlie Green",
              email: "charlie@example.com",
              website: "example.com",
              company: "XYZ Corp",
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Users list not found.",
        });
      }
    }, 2000);
  });
};

function Company() { // Corrected component name
  const [users, setUsers] = useState([]);
  const [company, setCompany] = useState(""); // Corrected state variable name
  const [isSelect, setIsSelect] = useState(true); // Corrected camelCase for state variable

  useEffect(() => {
    fakeFetch("https://example.com/api/users").then((resp) => {
      setUsers(resp.data);
    });
  }, []);

  function handleChange(e) {
    setCompany(e.target.value); // Corrected state variable name
    setIsSelect(e.target.value === ""); // Reset to true if no company is selected
  }

  return (
    <>
      <label htmlFor="companyFilter">Filter by Company: </label> {/* Updated label */}
      <select id="companyFilter" onChange={handleChange}>
        <option value="">Select company</option> {/* Added value="" for default option */}
        <option value="ABC Inc">ABC Inc</option>
        <option value="XYZ Corp">XYZ Corp</option>
        <option value="ACME Corp">ACME Corp</option>
      </select>
      {isSelect &&
        users.map((user, index) => (
          <div key={index}>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p> {/* Fixed duplicate label */}
            <p>Company: {user.company}</p> {/* Fixed duplicate label */}
          </div>
        ))}
      {!isSelect &&
        users
          .filter((user) => user.company === company) // Corrected state variable name
          .map((user, index) => (
            <div key={index}>
              <h2>Name: {user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Website: {user.website}</p> {/* Fixed duplicate label */}
              <p>Company: {user.company}</p> {/* Fixed duplicate label */}
            </div>
          ))}
    </>
  );
}

export default Company; // Corrected component name
