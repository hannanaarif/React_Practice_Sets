/*
Create a component that displays a random quote from an API using
the useEffect and useState hooks. The component should fetch a new quote when the user
clicks a button.
*/

import { useEffect, useState } from "react";

const fakeFetch = () => {
  const quotes = [
    {
      content: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      content:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about",
      author: "Albert Einstein",
    },
    {
      content: "So many books, so little time.",
      author: "Frank Zappa",
    },
    {
      content: "A room without books is like a body without a soul.",
      author: "Marcus Tullius Cicero",
    },
    {
      content:
        "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      resolve(randomQuote);
    }, 500);
  });
};

function Quote() {
    const [quotes, setQuotes] = useState({ content: "", author: "" });
    const [newQuote, setNewQuote] = useState(false);

    useEffect(() => {
        fakeFetch()
            .then((resp) => {
                setQuotes(resp);
            })
            .catch((error) => {
                console.error("Error fetching quote:", error);
            });
    }, [newQuote]);

    return (
        <>
            <h2>{quotes.content || "Loading..."}</h2>
            <h3>{quotes.author}</h3>
            <button onClick={() => setNewQuote(!newQuote)} aria-label="Get a new quote">
                New Quote
            </button>
        </>
    );
}

export default Quote;
