import React, { useState } from 'react';

import { fetchQuestions, QuestionState } from './API'
import Question from './Components/Question'


function App() {

  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [no, setNo] = useState(0)
  
  const start = async () => { 
    const data = await fetchQuestions();
    setQuestions(data);
    console.log(questions)
  }
  return (
    <div className="App">
      <h1>QUIZ</h1>
      <button onClick={start}>Start</button>
      {questions.length > 0 ? (
        <Question 
      question={questions[no].question}
      answers={questions[no].answers}
      questionNo={no+1}/>) : <div/>}
    </div>
  );
}

export default App;
