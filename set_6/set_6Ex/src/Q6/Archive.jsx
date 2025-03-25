/*
Create a React component that calls the habit tracker api and display only the habits which are
unarchived with heading “Unarchived”. Create a show archive button and on click
of show archive button show the archive habits and hide the unarchives. Change the heading of
the page to “Archived” when the button is clicked.
*/

import { useEffect, useState } from "react";
import './Archive.css'

export const fakeFetch = (url) => {
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
                archived: false,
              },
              {
                title: "Exercise",
                desc: "Track your workouts and aim to exercise a certain number of days per",
                daysFollowed: 10,
                daysSkipped: 4,
                archived: true,
              },
              {
                title: "Meditation",
                desc: "Track your daily meditation practice and try to increase the length",
                daysFollowed: 30,
                daysSkipped: 7,
                archived: true,
              },
              {
                title: "Gratitude",
                desc: "Write down something you are grateful for each day",
                daysFollowed: 11,
                daysSkipped: 5,
                archived: false,
              },
              {
                title: "Saving Money",
                desc: "Track your expenses and set a goal to save a certain amount of money",
                daysFollowed: 40,
                daysSkipped: 15,
                archived: false,
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

function Archive() {
  const [Habits, setHabit] = useState([]);
  const [AllHabits, setAllHabit] = useState([]);

  const [text, setText] = useState("Unarchived");

  function handleToggle() {
    setText((prevText) =>
      prevText === "Unarchived" ? "Archived" : "Unarchived"
    );
    if (text === "Unarchived") {
      setHabit(Habits.filter((habit) => habit.archived == true));
    } else {
      setHabit(AllHabits);
    }
  }

  useEffect(() => {
    fakeFetch("https://example.com/api/habits").then((resp) => {
      setHabit(resp.data.habits);
      setAllHabit(resp.data.habits);
    });
  }, []);

  return (
    <div className="habit-container">
      <h2 onClick={handleToggle} className="toggle-text">
        {text}
      </h2>

      <div className="habit-grid">
        {Habits.map((habit, index) => (
          <div key={index} className="habit-card">
            <h3 className="habit-title">{habit.title}</h3>
            <p className="habit-desc">{habit.desc}</p>
            <p className="habit-meta">
              <strong>Days Followed:</strong> {habit.daysFollowed}
            </p>
            <p className="habit-meta">
              <strong>Days Skipped:</strong> {habit.daysSkipped}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Archive;
