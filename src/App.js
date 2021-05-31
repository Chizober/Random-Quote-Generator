import React, { useState} from "react";
import Quotes from "./components/Quotes.js";
import Colors from "./components/Colors.js";
import QuoteBox from "./components/QuoteBox.js";
import "./App.css";

const App = ()=> {
const quote = Quotes;
const colors = Colors;
const [activeQuote, setActiveQuote] = useState(0);
const [activeColor, setActiveColor] = useState("#773344");
const generateRandomIndex=()=>{
let randomQuote = Math.floor(Math.random()*(quote.length))
setActiveQuote(randomQuote)
const randomColor=colors[Math.floor(Math.random()*colors.length)]
setActiveColor(randomColor);
}
return (
<>
  <header className="title">
    <h1>Motivational Quotes</h1>
  </header>
  <QuoteBox quotes={activeQuote} color={activeColor} onClick={generateRandomIndex} />
</>
)
};
export default App;
