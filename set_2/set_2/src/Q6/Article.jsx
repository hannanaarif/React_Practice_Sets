/*
Build a React component called Article that accepts two props: title and content. Inside the
component, render a <h1> tag with the title prop and a button below that which says “Know
More”. On the click of the button, show the content in a <p> tag just below the button.

Data:
const title = 'React is awesome'
const content = 'React is a JavaScript library for building user interfaces.'

*/

import { useState } from "react";

function Article({ title, content }) {
  const [state, setState] = useState(false);

  function handleArticle() {
    setState(true);
  }

  return (
    <>
      <h1>{title}</h1>
      <button onClick={handleArticle}>Know more</button>
      {state && <p>{content}</p>}
    </>
  );
}

export default Article;
