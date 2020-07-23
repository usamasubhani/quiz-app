import React from 'react'
import { Paper, Button, Typography, List, ListItem } from '@material-ui/core'

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
        <Paper elevation={10} className="questionContainer">
            <Typography dangerouslySetInnerHTML={{__html: question}} />
            <List>
            
            { answers.map(answer => (
                <ListItem key={answer}>
                <Button disabled={userAnswer ? true:false} value={answer} onClick={callBack}>{answer}</Button>
                </ListItem>
            )) }
                
            
            </List>
        </Paper>
    )
}

export default Question
