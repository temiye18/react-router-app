import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
  {
    id: "q1",
    author: "Max",
    text: "I can't believe I lost my job at the bank!",
  },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
