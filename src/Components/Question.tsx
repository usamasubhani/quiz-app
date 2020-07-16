import React from 'react'
import { Answer } from '../App'

type data = {
    question: string;
    answers: string[];
    questionNo: number;
    callBack: any;
    userAnswer: Answer | null;
}

const Question: React.FC<data> = ({ question, answers, questionNo, callBack, userAnswer }) => {
    return (
        <div>
            <p>{ question }</p>
            { answers.map(answer => (
                <button key={answer} value={answer} onClick={callBack} disabled={userAnswer ? true:false}>
                    { answer }
                </button>
            )) }
        </div>
    )
}

export default Question
