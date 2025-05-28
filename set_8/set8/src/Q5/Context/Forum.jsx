/*
Create a forum app in React with different routes for:

Home page
Questions page
Answer page

The Home page shows a welcome message with the user's name. The Questions page will list
all the questions with 3 buttons: upvote, downvote, and answers. On click of answers button,
Answer page should display with that particular question and answer.
*/

import {  createContext, useEffect, useState } from "react";

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/questions") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            questions: [
              {
                id: 1,
                question:
                  "What is the difference between null and undefined in JavaScript?",
                answer:
                  "Null means a variable has been declared but has no value. Undefined me",
              },
              {
                id: 2,
                question:
                  "What is the difference between let and var in JavaScript?",
                answer:
                  "Let is block-scoped and var is function-scoped. Variables declared wit",
              },
              {
                id: 3,
                question: "What is an arrow function in JavaScript?",
                answer:
                  "An arrow function is a concise way to write a function in JavaScript.",
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Questions not found.",
        });
      }
    }, 2000);
  });
};

export const forumContext=createContext();

function ForumProvider({children}){

    const [queAns,setQueAns]=useState([]);

    useEffect(()=>{
        fakeFetch("https://example.com/api/questions").then((resp)=>{
            setQueAns(resp.data.questions)
        })
    },[])

    return (
        <>
        <forumContext.Provider value={{queAns}}>
            {children}
        </forumContext.Provider>
        </>
    )

}

export default ForumProvider;
