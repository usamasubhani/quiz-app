import React from 'react'

type data = {
    question: string,
    answers: string[],
    questionNo: number,
}

const Question: React.FC<data> = ({ question, answers, questionNo }) => {
    return (
        <div>
            <p>{ question }</p>
            { answers.map(answer => (
                <div>
                    <button>
                        { answer }
                    </button>
                </div>
            )) }
            <button>Next</button>
        </div>
    )
}

export default Question
