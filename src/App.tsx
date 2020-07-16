import React, { useState } from 'react';

import { fetchQuestions, QuestionState } from './API'
import Question from './Components/Question'

function App() {

  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [no, setNo] = useState(0);
  const [quizInProgress, setProgress] = useState(false);
  
  const start = async () => { 
    const data = await fetchQuestions();
    setQuestions(data);
    setProgress(true);
  }

  const nextQuestion = () => {
    if (no != 9) {
      setNo(no + 1);
    }
    else {
      setProgress(false);
    }
  }
  return (
    <div className="App">
      <h1>QUIZ</h1>
      <button onClick={start}>Start</button>
      {questions.length > 0 && quizInProgress == true ? (
        <div>
          <Question 
          question={questions[no].question}
          answers={questions[no].answers}
          questionNo={no+1}/>
          <button onClick={nextQuestion}>Next</button>
        </div>
          ) : null}
    </div>
  );
}

export default App;
