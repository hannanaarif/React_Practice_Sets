import { useEffect, useState } from "react";

/*
Create a React component that calls the projects api and list all the projects when the page
loads with titles and description. Create buttons saying “Show Details” for each project. On click
of the button show title, description, technologies, completed of that project only.

*/
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/projects") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            projects: [
              {
                title: "E-commerce Website",
                description:
                  "A fully functional e-commerce website with shopping cart and checkout functionality.",
                technologies: ["React", "Node.js", "Express", "MongoDB"],
                completed: false,
              },
              {
                title: "Weather App",
                description:
                  "A web application that displays the current weather and forecast for a given location.",
                technologies: ["React", "Node.js", "OpenWeatherMap API"],
                completed: true,
              },
              {
                title: "Task Manager",
                description:
                  "A web application that allows users to create, manage, and track tasks.",
                technologies: ["Vue.js", "Firebase"],
                completed: false,
              },
              {
                title: "Blog Website",
                description:
                  "A blog website that allows users to create, read, update, and delete blog posts.",
                technologies: ["React JS", "MongoDB"],
                completed: true,
              },
              {
                title: "Mobile Game",
                description:
                  "A mobile game developed for iOS and Android platforms.",
                technologies: ["Unity", "C#"],
                completed: false,
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Projects not found.",
        });
      }
    }, 2000);
  });
};

function Project() {
  const [data, setData] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState("");

  useEffect(() => {
    fakeFetch("https://example.com/api/projects").then((resp) => {
      setData(resp.data.projects);
    });
  }, []);

  function handleDetails(index) {
    setVisibleIndex((previndex) => (previndex === index ? null : index));
  }

  return (
    <>
      <h2>Projects</h2>
      {data.length === 0 ? (
        <p>Loading projects...</p>
      ) : (
        data.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {visibleIndex === index && (
              <ul>
                <p>
                  <strong>Technologies:</strong>{" "}
                  {project.technologies.join(", ")}
                </p>
                <p>
                  <strong>Completed:</strong>{" "} {project.completed ? "true" : "false"}
                </p>
              </ul>
            )}
            <button onClick={() => handleDetails(index)}>
              {visibleIndex === index ? "Hide Deatils" : "Show Details"}
            </button>
          </div>
        ))
      )}
    </>
  );
}
export default Project;
