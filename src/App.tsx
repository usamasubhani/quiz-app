import React, { useState } from 'react';

import { fetchQuestions, QuestionState } from './API'
import Question from './Components/Question'

export type Answer = {
  correct: boolean;
  question: string;
  answer: string;
  correct_answer: string;
}

function App() {

  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [no, setNo] = useState(0);
  const [quizInProgress, setProgress] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);
  const [score, setScore] = useState(0);
  
  const start = async () => { 
    const data = await fetchQuestions();
    setNo(0);
    setScore(0);
    setUserAnswers([]);
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

  const checkAnswer = (e: any) => {
    const answer = e.currentTarget.value;
    const correct = questions[no].correct_answer == answer;
    if (correct) {
      setScore((prev) => prev + 1);
    }
    const answerObject = {
      question: questions[no].question,
      answer,
      correct,
      correct_answer: questions[no].correct_answer,
    };
    setUserAnswers((prev) => [...prev, answerObject]);
    // console.log(userAnswers[no]);
  }

  return (
    <div className="App">
      <h1>QUIZ</h1>
      <button onClick={start}>Start</button>
      {questions.length > 0 && quizInProgress == true ? (
        <div>
          <p>{ no + 1 }/10</p>
          <Question 
          question={questions[no].question}
          answers={questions[no].answers}
          questionNo={no+1}
          callBack={checkAnswer}
          userAnswer={userAnswers ? userAnswers[no] : null}/>
          <button onClick={nextQuestion}>Next</button>
        </div>
          ) : null}

        {quizInProgress == false && userAnswers.length > 0 ? (
          <div>
            <h2>Score: { score }</h2>
          </div>
        ) : null}
    </div>
  );
}

export default App;
