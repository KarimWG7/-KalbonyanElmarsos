import React, { Fragment } from "react";
import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Karim", text: "Learning React is fun!" },
  { id: "q2", author: "Amr", text: "Graphic Design is fun!" },
  { id: "q3", author: "Waheed", text: "Trading is more fun!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <h3>No Quote Found</h3>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* <Route path="/quotes/:quoteId/comments"></Route> */}
      {/* we can alse do that*/}
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
