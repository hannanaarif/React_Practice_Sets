/*
Create a React component that calls the habit tracker api when the page is loaded completely
and display the habits with the total days they were followed and days skipped in between.
*/

import { useState } from "react";
import { useEffect } from "react";

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/habits") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            habits: [
              {
                title: "Drinking enough water",
                desc: "Aim to drink 5-6L of water each day to stay hydrated",
                daysFollowed: 7,
                daysSkipped: 3,
              },
              {
                title: "Exercise",
                desc: "Track your workouts and aim to exercise a certain number of days per",
                daysFollowed: 10,
                daysSkipped: 4,
              },
              {
                title: "Meditation",
                desc: "Track your daily meditation practice and try to increase the length o",
                daysFollowed: 30,
                daysSkipped: 7,
              },
              {
                title: "Gratitude",
                desc: "Write down something you are grateful for each day",
                daysFollowed: 11,
                daysSkipped: 5,
              },
              {
                title: "Saving Money",
                desc: "Track your expenses and set a goal to save a certain amount of money",
                daysFollowed: 40,
                daysSkipped: 15,
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Habits not found.",
        });
      }
    }, 2000);
  });
};

function Habit() {
  const [habits, setHabit] = useState([]);

  useEffect(() => {
    fakeFetch("https://example.com/api/habits").then((response) => {
      setHabit(response.data.habits);
    });
  }, []);

  return (
    <>
      <h2 style={{ margin: "10px 0" }}>Habit Tracker</h2>
      {habits.map((habit, index) => (
        <li key={index} style={{ marginBottom: "5px", textAlign: "left" }}>
          <strong>{habit.title}</strong>
          <p style={{ margin: "2px 0" }}>{habit.desc}</p>
          <p style={{ margin: "2px 0" }}><strong>Days Followed:{habit.daysFollowed}</strong></p>
          <strong>Days Skipped:{habit.daysSkipped}</strong>
          <hr/>
        </li>
      ))}
    </>
  );
}

export default Habit;
