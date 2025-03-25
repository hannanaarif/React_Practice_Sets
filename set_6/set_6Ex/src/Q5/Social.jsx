/*
Create a react component that calls the social media api when the page is loaded completely
and display all the posts on the screen. And on click of show bakery button, show only the posts
with category as bakery.
*/

import { useEffect, useState } from "react";

import "./Social.css";

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/posts") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            posts: [
              {
                caption: "Delicious chocolate cake recipe",
                src: "https://picsum.photos/300/301",
                views: 1000,
                likes: 100,
                category: "Bakery",
              },
              {
                caption: "5-minute breakfast ideas",
                src: "https://picsum.photos/300/300",
                views: 500,
                likes: 50,
                category: "Food",
              },
              {
                caption: "The best bread recipe you'll ever taste",
                src: "https://picsum.photos/300/302",
                views: 2000,
                likes: 200,
                category: "Bakery",
              },
              {
                caption: "10 DIY home decor ideas",
                src: "https://picsum.photos/300/303",
                views: 100,
                likes: 10,
                category: "DIY",
              },
              {
                caption: "Healthy snacks for work",
                src: "https://picsum.photos/300/304",
                views: 300,
                likes: 30,
                category: "Food",
              },
              {
                caption: "How to make sourdough bread at home",
                src: "https://picsum.photos/300/305",
                views: 1500,
                likes: 150,
                category: "Bakery",
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Post not found.",
        });
      }
    }, 2000);
  });
};

function Social() {
  const [pages, setpage] = useState([]);
  const [AllPages,setAllPages]=useState([])

  useEffect(() => {
    fakeFetch("https://example.com/api/posts").then((resp) => {
      setpage(resp.data.posts);
      setAllPages(resp.data.posts)
    });
  }, []);

  function handleBakery() {
    setpage(pages.filter((page) => page.category === "Bakery"));
  }

  function handleAll(){
    setpage(AllPages)
  }

  return (
    <>
      <div className="page-grid">
        {pages.map((page, index) => (
          <div key={index} className="page-card">
            <img src={page.src} alt="image" className="page-image" />
            <h2 className="page-title">{page.caption}</h2>
            <p className="page-meta">
              <strong>Likes: {page.likes}</strong>
            </p>
            <p className="page-meta">
              <strong>Views: {page.views}</strong>
            </p>
          </div>
        ))}
      </div>
      <button onClick={handleBakery}>Show Bakery</button>
      <button onClick={handleAll}>Show All</button>
    </>
  );
}

export default Social;
