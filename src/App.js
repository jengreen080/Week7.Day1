import React from 'react';    // 1️⃣
import './App.css';           // 2️⃣

function App() {
  const name = "Jennifer"
  const age = 26
  return (
  	<div>
  		<h1 className="title">Hello World!</h1>
  		<p> This is a paragraph of text</p>
      <p> My name is {name} and I'm {age} years old</p>
  	</div>
    
  );
}                           // 8️⃣

export default App;           // 9️⃣