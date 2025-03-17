/*
Create a React component that fetches chat data from an API endpoint using useEffect hook
and display chat data (name and chat message) as a list on the screen using the useState hook.
a. Show “Loading Chats…” until your data displays on the DOM.

export const fakeFetch = (url) => {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 if (url === 'https://example.com/api/userchat') {
 resolve({
 status: 200,
 message: 'Success',
 data: [
 {
 name: 'Alia',
 messages: [
 {
 from: 'Alia',
 message: 'Good Morning',
 },
 {
 from: 'Ranvir',
 message: 'Good Morning, How are you?',
 },
 ],
 },
 {name: 'Jeena',
 messages: [
 {
 from: 'Jeena',
 message: 'When is the meeting scheduled?',
 },
 {
 from: 'Seema',
 message: 'It is at 10AM tomorrow.',
 },
 ],
 },
 {
 name: 'Abhay',
 messages: [
 {
 from: 'Abhay',
 message: 'Have you found a house yet?',
 },
 {
 from: 'John',
 message: 'No luck yet, still searching.',
 },
 {
 from: 'Abhay',
 message:
 'Hey, an apartment just got vacant in my bulding. Do you wanna have a
 },
 ],
 },
 ],
 })
 } else {
 reject({
 status: 404,
 message: 'users chat not found.',
 })
 }
 }, 2000)
 })
}
*/

import { useState, useEffect } from "react";

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/userchat") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            {
              name: "Alia",
              messages: [
                {
                  from: "Alia",
                  message: "Good Morning",
                },
                {
                  from: "Ranvir",
                  message: "Good Morning, How are you?",
                },
              ],
            },
            {
              name: "Jeena",
              messages: [
                {
                  from: "Jeena",
                  message: "When is the meeting scheduled?",
                },
                {
                  from: "Seema",
                  message: "It is at 10AM tomorrow.",
                },
              ],
            },
            {
              name: "Abhay",
              messages: [
                {
                  from: "Abhay",
                  message: "Have you found a house yet?",
                },
                {
                  from: "John",
                  message: "No luck yet, still searching.",
                },
                {
                  from: "Abhay",
                  message:
                    "Hey, an apartment just got vacant in my bulding. Do you wanna have a look of it",
                },
              ],
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "users chat not found.",
        });
      }
    }, 2000);
  });
};

function Chat() {
  const [userChat, setUserChat] = useState([]);

  useEffect(() => {
    fakeFetch("https://example.com/api/userchat")
      .then((userData) => {
        console.log(userData.data.map((item) => item.name)); // Correct: Logging received data, not userChat
        setUserChat(userData.data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
      });
  }, []);

  return (
    <>
      <ul>
        {userChat.map((User) => (
          <li key={User.name}>
            <h2>{User.name}'s Chat</h2>
            <ul>
              {User.messages.map((item) => (
                <li>
                  <p>
                    <strong>
                      {item.from}:{" "}
                    </strong>
                    {item.message}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Chat;
