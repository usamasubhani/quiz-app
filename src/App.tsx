import React, { useState } from 'react';
import { Paper, Button, AppBar, Typography, Toolbar } from '@material-ui/core'
import './App.css'
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
    if (no !== 9) { // Not Last Question
      setNo((prev) => prev + 1);
    }
    else {
      setProgress(false);
    }
  }

  const checkAnswer = (e: any) => {
    const answer = e.currentTarget.value;
    const correct = questions[no].correct_answer === answer;

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
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow:0.5 }}>
            Quiz
          </Typography>

          {quizInProgress ?
          (<Typography variant="h6" style={{ flexGrow:0.5 }}> 
            { no + 1 }/10
          </Typography>) 
          : <div style={{ flexGrow:0.5 }}/>}

          {!quizInProgress ? 
          (<Button className="start" onClick={start} color="inherit">Start</Button>)
          : <Button color="inherit" onClick={nextQuestion}>Next</Button> }
          
        </Toolbar>
      </AppBar>
      
      {questions.length > 0 && quizInProgress === true ? (
        <div className="question">
          <Question 
          question={questions[no].question}
          answers={questions[no].answers}
          questionNo={no+1}
          callBack={checkAnswer}
          userAnswer={userAnswers ? userAnswers[no] : null}/>
        </div>
          ) : 
          <Paper elevation={10} className="questionContainer">
            {!quizInProgress && userAnswers.length > 0 ? (
            <div>
              <Typography variant="h4">Score: { score }</Typography>
            </div>
              ) : null}
          </Paper>}
    </div>
  );
}

export default App;
