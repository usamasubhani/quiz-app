import React, { useState } from 'react';

import { fetchQuestions } from './API'
import Question from './Components/Question'


function App() {

  const [questions, setQuestions] = useState([]);

  
  const start = async () => { 
    const data = await fetchQuestions();
    console.log(data);
  }

  start();
  return (
    <div className="App">
      <h1>QUIZ</h1>
      {/* <Question /> */}
    </div>
  );
}

export default App;
