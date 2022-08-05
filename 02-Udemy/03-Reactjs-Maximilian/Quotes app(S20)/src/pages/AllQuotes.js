import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Karim", text: "Learning React is fun!" },
  { id: "q2", author: "Amr", text: "Graphic Design is fun!" },
  { id: "q3", author: "Waheed", text: "Trading is more fun!" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
