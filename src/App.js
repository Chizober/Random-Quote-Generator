import React, { useState,useEffect} from "react";
import Quotes from "./components/Quotes.js";
import Colors from "./components/Colors.js";
import QuoteBox from "./components/QuoteBox.js";
import "./App.css";

const App = ()=> {
const quote = Quotes;
const colors = Colors;
const [activeQuote, setActiveQuote] = useState(0);
const [activeColor, setActiveColor] = useState(0);
useEffect(()=>{
document.body.style.backgroundColor =colors[activeColor];
},[activeColor])  
const generateNewIndex=()=>{
let nextColor = activeColor + 1 === colors.length ? 0 :activeColor + 1;
setActiveColor(nextColor)
let nextQuote = activeQuote + 1 === quote.length ? 0 : activeQuote + 1;
setActiveQuote(nextQuote);
}
return (
<>
  <header className="title">
    <h1>Motivational Quotes</h1>
  </header>
  <QuoteBox quotes={activeQuote} color={colors[activeColor]} onClick={generateNewIndex} />
</>
)
};
export default App;
