import React, { useState, useEffect } from "react";
import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa";
import Quotes from "./Quotes.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const QuoteBox=({quotes,color,onClick})=>{
const quote = Quotes;
document.body.style.backgroundColor =`${color}`
return (
<>
  <TransitionGroup className="container ">
    <CSSTransition key={quotes} timeout={1000} classNames="slide">
      <div class="app">
        <blockquote style={{color:`${color}`,borderLeftColor:`${color}`}}>
          <p className="quote">
            <FaQuoteLeft className="quoteLeft" />{quote[quotes].quote}
            <FaQuoteRight className="quoteRight" />
          </p>
          <small className="author">{quote
            [quotes].author}
          </small>
        </blockquote>
      </div>
    </CSSTransition>
  </TransitionGroup>
  <button onClick={onClick} className="quotebutton">
    New Quote
  </button>
</>
);
};
export default QuoteBox;